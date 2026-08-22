import Link from "next/link";

export default function ApiIndexPage() {
	return (
		<div className="container mx-auto max-w-4xl px-4 py-8">
			<h1 className="mb-3 text-3xl font-bold">EXP Bank Calculator API</h1>
			<p className="max-w-3xl leading-7 text-muted-foreground">
				Read-only JSON resources are available without authentication.
				For endpoint descriptions and the OpenAPI contract, read the{" "}
				<Link className="underline underline-offset-4" href="/docs">
					API docs
				</Link>
				.
			</p>
			<ul className="mt-6 list-disc space-y-2 pl-6">
				<li>
					<a className="underline underline-offset-4" href="/api/info.json">
						/api/info.json
					</a>{" "}
					for calculator assumptions and documentation links
				</li>
				<li>
					<a className="underline underline-offset-4" href="/api/ranks.json">
						/api/ranks.json
					</a>{" "}
					for the rank threshold list
				</li>
			</ul>
		</div>
	);
}
