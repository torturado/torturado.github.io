import type { Metadata } from "next";
import Link from "next/link";
import { createRouteMetadata } from "../routeMetadata";

export const metadata: Metadata = createRouteMetadata({
	title: "API docs | EXP Bank Calculator",
	description:
		"Developer documentation for the EXP Bank Calculator JSON endpoints, OpenAPI specification, and browser WebMCP tools.",
	canonicalPath: "/docs",
	markdownPath: "/docs.md",
});

const ranksExample = "curl https://torturado.github.io/api/ranks.json";
const infoExample = "curl https://torturado.github.io/api/info.json";

export default function DocsPage() {
	return (
		<div className="container mx-auto max-w-4xl px-4 py-8">
			<h1 className="mb-3 text-3xl font-bold">EXP Bank Calculator API docs</h1>
			<p className="max-w-3xl leading-7 text-muted-foreground">
				This site publishes small, read-only JSON resources for agents and
				developers. They require no authentication and return stable
				application/json documents. For arbitrary calculations, use the
				browser WebMCP tools on the homepage because GitHub Pages cannot
				run request-time code.
			</p>

			<section className="mt-8 space-y-6">
				<div>
					<h2 className="mb-2 text-2xl font-semibold">OpenAPI specification</h2>
					<p className="leading-7">
						Download the machine-readable contract at{" "}
						<a
							className="underline underline-offset-4"
							href="/openapi.json"
						>
							/openapi.json
						</a>
						. It defines each endpoint, response schema, operation ID,
						and structured error shape.
					</p>
				</div>

				<div>
					<h2 className="mb-2 text-2xl font-semibold">List rank thresholds</h2>
					<p className="leading-7">
						Use <code>/api/ranks.json</code> to retrieve the Discord
						rank thresholds used by the calculator.
					</p>
					<pre className="mt-3 overflow-x-auto border-l border-input pl-4 text-sm leading-6">
						<code>{ranksExample}</code>
					</pre>
				</div>

				<div>
					<h2 className="mb-2 text-2xl font-semibold">Read calculator info</h2>
					<p className="leading-7">
						Use <code>/api/info.json</code> for the daily rate, time
						normalization, formula, and links to the full docs.
					</p>
					<pre className="mt-3 overflow-x-auto border-l border-input pl-4 text-sm leading-6">
						<code>{infoExample}</code>
					</pre>
				</div>

				<div>
					<h2 className="mb-2 text-2xl font-semibold">Calculate growth with WebMCP</h2>
					<p className="leading-7">
						The homepage exposes <code>calculate-exp-growth</code> and{" "}
						<code>list-exp-ranks</code> through{" "}
						<code>navigator.modelContext</code> when the browser
						supports WebMCP. The{" "}
						<Link className="underline underline-offset-4" href="/llms.txt">
							agent guide
						</Link>{" "}
						documents the inputs and the intended use cases.
					</p>
				</div>

				<div>
					<h2 className="mb-2 text-2xl font-semibold">Errors and hosting limits</h2>
					<p className="leading-7">
						The static JSON resources have no request parameters, so
						they have no invalid input branch. The OpenAPI document
						defines a JSON error object for a future request-time API.
						A server deployment is required before this site can
						return JSON errors for arbitrary requests, negotiate
						Markdown with <code>Vary: Accept</code>, or expose an MCP
						Streamable HTTP handshake.
					</p>
				</div>
			</section>
		</div>
	);
}
