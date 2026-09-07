import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(path, "utf8");

const visibleText = (html) =>
	html
		.replace(/<script[\s\S]*?<\/script>/gi, " ")
		.replace(/<style[\s\S]*?<\/style>/gi, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/<!--\s*-->/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#x27;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/[\s\u00a0]+/g, " ")
		.trim();

const jsonLdFrom = (html) => {
	const match = html.match(
		/<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
	);
	assert.ok(match, "homepage should include JSON-LD");
	return JSON.parse(match[1]);
};

test("homepage has useful content before JavaScript runs", async () => {
	const html = await read("out/index.html");
	const text = visibleText(html);

	assert.match(html, /<h1[^>]*>EXP Bank Calculator<\/h1>/);
	assert.match(text, /EXP Bank gem growth calculator/);
	assert.match(
		html,
		/class="mb-5 space-y-2 text-sm leading-5 text-muted-foreground"/,
		"homepage guidance should stay compact for calculator users",
	);
	assert.ok(text.length >= 500, "homepage raw text should contain at least 500 characters");

	const graph = jsonLdFrom(html)["@graph"];
	assert.ok(Array.isArray(graph));
	assert.ok(graph.some((node) => node["@type"] === "SoftwareApplication"));

	const organization = graph.find((node) => node["@type"] === "Organization");
	assert.ok(organization);
	assert.equal(organization.contactPoint["@type"], "ContactPoint");
	assert.equal(organization.contactPoint.contactType, "customer support");
	assert.match(organization.contactPoint.email, /@/);
	assert.equal(organization.address["@type"], "PostalAddress");
	assert.ok(organization.sameAs.includes("https://github.com/torturado/torturado.github.io"));
	assert.ok(graph.some((node) => node["@type"] === "WebSite"));
	assert.ok(graph.some((node) => node["@type"] === "WebPage"));
});

test("custom 404 gives agents a recovery guide", async () => {
	const html = await read("out/404.html");

	assert.match(html, /<h1[^>]*>Page not found<\/h1>/);
	assert.match(html, /# EXP Bank Calculator/);
	assert.match(html, /href="\/docs"/);
	assert.match(html, /href="\/llms\.txt"/);
	assert.match(html, /href="\/sitemap\.xml"/);
});

test("OpenAPI describes typed operations and JSON errors", async () => {
	const spec = JSON.parse(await read("public/openapi.json"));

	assert.equal(spec.openapi, "3.1.0");
	assert.equal(Object.keys(spec.paths).length, 2);

	const operationIds = new Set();
	for (const path of Object.values(spec.paths)) {
		const operation = path.get;
		assert.ok(operation);
		assert.ok(operation.operationId);
		assert.ok(!operationIds.has(operation.operationId));
		operationIds.add(operation.operationId);
		assert.ok(operation.description.length > 40);
		assert.ok(operation.responses["200"].content["application/json"].schema);
		assert.ok(operation.responses["404"].content["application/json"].schema);
		assert.ok(operation.responses.default);
	}

	assert.ok(spec.components.schemas.ErrorResponse);
	assert.deepEqual(
		spec.components.schemas.ErrorResponse.properties.error.required,
		["code", "message", "resolution"],
	);
});

test("static JSON endpoints match the published contract", async () => {
	const info = JSON.parse(await read("out/api/info.json"));
	const ranks = JSON.parse(await read("out/api/ranks.json"));
	const spec = JSON.parse(await read("out/openapi.json"));
	const infoMarkdown = await read("out/api/info.json.md");
	const ranksMarkdown = await read("out/api/ranks.json.md");

	assert.equal(info.dailyInterestRate, "0.003");
	assert.equal(info.calculationAccess.staticJson, false);
	assert.equal(info.calculationAccess.webMcp, true);
	assert.equal(ranks.ranks.length, 7);
	assert.equal(ranks.ranks.at(-1).name, "Cosmic");
	assert.ok(spec.paths["/api/info.json"]);
	assert.ok(spec.paths["/api/ranks.json"]);
	assert.match(infoMarkdown, /^---\ntitle: EXP Bank Calculator API info/m);
	assert.match(infoMarkdown, /^# EXP Bank Calculator API info/m);
	assert.match(ranksMarkdown, /^# EXP Bank Calculator rank thresholds/m);
});

test("agent discovery files name the best-fit use cases and developer resources", async () => {
	const llms = await read("public/llms.txt");
	const agents = await read("public/agents.md");
	const skill = await read(
		"public/.well-known/agent-skills/exp-bank-calculator/SKILL.md",
	);
	const skillIndex = JSON.parse(
		await read("public/.well-known/agent-skills/index.json"),
	);

	assert.match(llms, /^# EXP Bank Calculator/m);
	assert.match(llms, /## When to use this calculator/);
	assert.match(llms, /\/docs/);
	assert.match(llms, /\/openapi\.json/);
	assert.match(llms, /\/api\/llms\.txt/);
	assert.match(llms, /\/auth\.md/);
	assert.match(agents, /## When to use this calculator/);
	assert.match(agents, /\/api\/info\.json/);
	assert.match(skill, /## When to use this skill/);
	assert.equal(
		skillIndex.skills[0].digest,
		"sha256:" + createHash("sha256").update(skill).digest("hex"),
	);
});

test("trust and documentation pages are substantial and linked in the sitemap", async () => {
	for (const route of ["about", "docs", "contact", "privacy"]) {
		const html = await read("out/" + route + ".html");
		assert.ok(visibleText(html).length >= 500, route + " should contain substantial text");
	}

	const sitemap = await read("public/sitemap.xml");
	for (const path of ["/about", "/docs", "/openapi.json", "/api/info.json", "/api/ranks.json"]) {
		assert.match(sitemap, new RegExp(path.replace(".", "\\.")));
	}
	for (const path of ["/api/info.json.md", "/api/ranks.json.md", "/api/llms.txt", "/docs/llms.txt", "/auth.md"]) {
		assert.match(sitemap, new RegExp(path.replace(".", "\\.")));
	}
});
