import Link from "next/link";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full py-4 border-t bg-muted/5">
			<div className="container mx-auto px-4">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
					<p>© {currentYear} EXP Calculator</p>
					<nav
						aria-label="Site links"
						className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2"
					>
						<Link
							href="/privacy"
							className="hover:text-foreground transition-colors"
						>
							Privacy
						</Link>
						<Link
							href="/terms"
							className="hover:text-foreground transition-colors"
						>
							Terms
						</Link>
						<Link
							href="/faq"
							className="hover:text-foreground transition-colors"
						>
							FAQ
						</Link>
						<Link
							href="/tips"
							className="hover:text-foreground transition-colors"
						>
							Gem growth tips
						</Link>
						<Link
							href="/about"
							className="hover:text-foreground transition-colors"
						>
							About
						</Link>
						<Link
							href="/docs"
							className="hover:text-foreground transition-colors"
						>
							Docs
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}
