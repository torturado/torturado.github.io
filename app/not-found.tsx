import Link from "next/link";

const markdownRecoveryGuide = `# EXP Bank Calculator

The requested path does not exist.

- [Calculator](/)
- [API docs](/docs)
- [Agent guide](/llms.txt)
- [Sitemap](/sitemap.xml)
`;

export default function NotFound() {
	return (
		<section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 py-16">
			<p className="font-mono text-sm text-muted-foreground">404</p>
			<h1 className="mt-3 text-3xl font-semibold tracking-tight">
				Page not found
			</h1>
			<p className="mt-4 max-w-xl leading-7 text-muted-foreground">
				This path is not part of the EXP Bank Calculator. Continue with
				the calculator, the developer documentation, or the agent guide.
			</p>
			<nav
				aria-label="Recovery links"
				className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm"
			>
				<Link className="underline underline-offset-4" href="/">
					Open the calculator
				</Link>
				<Link className="underline underline-offset-4" href="/docs">
					Read the API docs
				</Link>
				<Link className="underline underline-offset-4" href="/llms.txt">
					Read the agent guide
				</Link>
				<Link className="underline underline-offset-4" href="/sitemap.xml">
					View the sitemap
				</Link>
			</nav>
			<pre className="mt-8 overflow-x-auto whitespace-pre-wrap border-l border-input pl-4 text-xs leading-6 text-muted-foreground">
				{markdownRecoveryGuide}
			</pre>
		</section>
	);
}
