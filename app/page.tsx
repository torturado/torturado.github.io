import { ChangelogModal } from "@/components/ChangelogModal";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Link from "next/link";
import { createRouteMetadata } from "./routeMetadata";

const Calculator = dynamic(() => import("../components/Calculator"), {
	loading: () => (
		<div className="rounded-lg border border-input bg-card p-6 text-sm text-muted-foreground">
			Loading calculator...
		</div>
	),
});

const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "SoftwareApplication",
			"@id": "https://torturado.github.io/#application",
			name: "EXP Bank Calculator",
			description:
				"A browser-based calculator for projecting EXP Bank gem growth, planning balances, and estimating time to reach a target.",
			url: "https://torturado.github.io/",
			applicationCategory: "WebApplication",
			operatingSystem: "Any",
			isAccessibleForFree: true,
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD",
			},
			publisher: {
				"@id": "https://torturado.github.io/#organization",
			},
		},
		{
			"@type": "Organization",
			"@id": "https://torturado.github.io/#organization",
			name: "EXP Calculator",
			description:
				"The publisher of the EXP Bank Calculator and its public documentation.",
			url: "https://torturado.github.io/",
			logo: "https://torturado.github.io/og-image.jpg",
			contactPoint: {
				"@type": "ContactPoint",
				contactType: "customer support",
				email: "expcalculator.cupped755@passinbox.com",
			},
			address: {
				"@type": "PostalAddress",
				addressLocality: "Online-only project",
				addressCountry: "ZZ",
			},
			sameAs: ["https://github.com/torturado/torturado.github.io"],
		},
		{
			"@type": "WebSite",
			"@id": "https://torturado.github.io/#website",
			name: "EXP Bank Calculator",
			description:
				"Public documentation and calculator for EXP Bank gem growth projections.",
			url: "https://torturado.github.io/",
			publisher: {
				"@id": "https://torturado.github.io/#organization",
			},
		},
		{
			"@type": "WebPage",
			"@id": "https://torturado.github.io/#homepage",
			name: "EXP Bank Calculator | Gem Growth Calculator",
			description:
				"Calculate EXP Bank gem growth, target balances, and time-to-goal estimates.",
			url: "https://torturado.github.io/",
			isPartOf: {
				"@id": "https://torturado.github.io/#website",
			},
			about: {
				"@id": "https://torturado.github.io/#application",
			},
			mainEntity: {
				"@id": "https://torturado.github.io/#application",
			},
		},
	],
};

export const metadata: Metadata = createRouteMetadata({
	title: "EXP Bank Calculator | Gem Growth Calculator",
	description:
		"Static GitHub Pages calculator for EXP Bank gem growth, goal planning, and compound-interest projections at a 0.50% daily rate.",
	canonicalPath: "/",
	markdownPath: "/index.md",
});

export default function Home() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>
			<ChangelogModal />
			<section className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto">
				{/* Header - minimal */}
				<header className="flex items-center justify-between mb-5 animate-fade-in-up">
					<div className="animate-fade-in-up">
						<h1 className="text-2xl font-semibold tracking-tight">
							EXP Bank Calculator
						</h1>
						<p className="text-muted-foreground text-sm mt-1 animate-fade-in-up animate-stagger-1">
							Calculate your gem growth.
						</p>
					</div>
					<div className="flex items-center gap-2 animate-fade-in-up animate-stagger-2">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										asChild
										variant="ghost"
										size="icon"
										className="h-9 w-9"
									>
										<Link
											href="/faq"
											aria-label="Open FAQ and help page"
										>
											<HelpCircle className="h-4 w-4" />
											<span className="sr-only">
												Help
											</span>
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>FAQ & Help</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<ThemeToggle />
					</div>
				</header>

				<section
					aria-labelledby="calculator-description"
					className="mb-5 space-y-2 text-sm leading-5 text-muted-foreground"
				>
					<h2
						id="calculator-description"
						className="text-lg font-medium text-foreground"
					>
						EXP Bank gem growth calculator
					</h2>
					<p>
						Use this calculator to estimate how a starting EXP Bank
						balance grows over time. It models daily compound growth
						at a fixed rate of 0.50%, then converts that rate into an
						equivalent hourly rate for shorter time periods.
					</p>
					<p>
						Enter your current gems and choose a duration in years,
						months, days, hours, minutes, or seconds. You can also
						enter a future date, a target balance, or an additional
						amount you want to earn. The results include the
						projected balance, profit, growth percent, income
						estimates, and the Discord rank thresholds reached.
					</p>
					<p>
						The calculator uses the formula FV = PV × (1 + r)^t. FV
						is the future balance, PV is the starting balance, r is
						the daily rate 0.005, and t is the number of days. One
						year is treated as 365 days and one month as 30 days.
						Calculations run in your browser, and high-precision
						arithmetic keeps large gem amounts readable.
					</p>
					<p>
						For plain-text instructions and public developer
						resources, read the{" "}
						<Link
							href="/llms.txt"
							className="text-foreground underline underline-offset-4"
						>
							agent guide
						</Link>
						,{" "}
						<Link
							href="/docs"
							className="text-foreground underline underline-offset-4"
						>
							API docs
						</Link>
						, or{" "}
						<Link
							href="/about"
							className="text-foreground underline underline-offset-4"
						>
							about page
						</Link>
						.
					</p>
				</section>

				{/* Calculator - single focus */}
				<section id="calculator">
					<Calculator />
				</section>
			</section>
		</>
	);
}
