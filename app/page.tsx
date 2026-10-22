import { ChangelogModal } from "@/components/ChangelogModal";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { calculateExpGrowth, getExpRanks } from "@/lib/expCalculator";
import BigNumber from "bignumber.js";
import { HelpCircle } from "lucide-react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Link from "next/link";
import { createRouteMetadata } from "./routeMetadata";

const title = "EXP Bank Calculator | Gem Growth & Interest";
const description =
	"Free EXP Bank calculator for gem growth at 0.30% daily compound interest. Estimate future gems, profit, time to your goal, and Discord rank milestones.";

const growthExamples = [1, 7, 30, 180, 365].map((days) => {
	const { results } = calculateExpGrowth({ currentGems: "1000", days });
	return {
		days,
		balance: new BigNumber(results.futureGems).toFormat(2),
		profit: new BigNumber(results.profit).toFormat(2),
	};
});

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
			alternateName: "EXP Calculator",
			description,
			url: "https://torturado.github.io/",
			applicationCategory: "UtilitiesApplication",
			operatingSystem: "Any",
			inLanguage: "en",
			featureList: [
				"Gem growth at 0.30% daily compound interest",
				"Future balance and profit estimates",
				"Time to reach a gem goal",
				"Discord rank milestones",
			],
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
			alternateName: "EXP Calculator",
			description,
			inLanguage: "en",
			url: "https://torturado.github.io/",
			publisher: {
				"@id": "https://torturado.github.io/#organization",
			},
		},
		{
			"@type": "WebPage",
			"@id": "https://torturado.github.io/#homepage",
			name: title,
			description,
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
	title,
	description,
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
							Gem growth at 0.30% daily compound interest.
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
										<Link href="/faq" aria-label="Open FAQ and help page">
											<HelpCircle className="h-4 w-4" />
											<span className="sr-only">Help</span>
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
						Use this free EXP calculator to project your EXP Bank gem balance,
						interest earned, and time to reach a goal. Enter your current gems
						and a duration or target date to see your estimated growth. No
						account required.
					</p>
					<nav
						aria-label="Calculator guide"
						className="flex flex-wrap gap-x-4 gap-y-2 pt-1"
					>
						<a className="underline underline-offset-4" href="#how-to-use">
							How to use
						</a>
						<a className="underline underline-offset-4" href="#growth-examples">
							Growth examples
						</a>
						<a
							className="underline underline-offset-4"
							href="#interest-formula"
						>
							Interest formula
						</a>
						<Link className="underline underline-offset-4" href="/faq">
							EXP Bank FAQ
						</Link>
					</nav>
				</section>

				{/* Calculator - single focus */}
				<section id="calculator">
					<Calculator />
				</section>

				<div className="mt-10 flex flex-col gap-8 text-sm leading-6 text-muted-foreground">
					<section
						id="how-to-use"
						aria-labelledby="how-to-use-title"
						className="scroll-mt-6 flex flex-col gap-3"
					>
						<h2
							id="how-to-use-title"
							className="text-xl font-semibold text-foreground"
						>
							How to use the EXP calculator
						</h2>
						<ol className="list-decimal pl-5 flex flex-col gap-2">
							<li>
								Enter your balance in <strong>Current Gems</strong>.
							</li>
							<li>
								Choose a time period in years, months, days, hours, minutes, or
								seconds, or enter a <strong>Target Date</strong> and optional
								time.
							</li>
							<li>
								Optionally set <strong>Goal Gems</strong> for a target total, or{" "}
								<strong>Additional Gems</strong> for the extra amount you want
								to earn.
							</li>
							<li>
								Select <strong>Calculate</strong> to see your projected balance,
								profit, growth percentage, and time to your goal.
							</li>
						</ol>
						<p>
							For example, with 1,000 current gems, a goal of 2,000 gems and an
							additional-gems target of 1,000 both mean earning another 1,000
							gems. Additional Gems is a profit target; it does not add a new
							deposit.
						</p>
					</section>

					<section
						id="growth-examples"
						aria-labelledby="growth-examples-title"
						className="scroll-mt-6 flex flex-col gap-3"
					>
						<h2
							id="growth-examples-title"
							className="text-xl font-semibold text-foreground"
						>
							EXP Bank gem growth examples
						</h2>
						<p>
							Starting with 1,000 gems, these estimates assume 0.30% daily
							compound interest and no further deposits or withdrawals. Balances
							and profit are rounded to two decimal places.
						</p>
						<div className="overflow-x-auto">
							<table className="w-full text-left tabular-nums">
								<caption className="mb-2 text-left">
									Growth of 1,000 gems at 0.30% daily interest
								</caption>
								<thead className="text-foreground">
									<tr className="border-b">
										<th scope="col" className="py-2 pr-4 font-medium">
											Duration
										</th>
										<th
											scope="col"
											className="py-2 pr-4 text-right font-medium"
										>
											Balance
										</th>
										<th scope="col" className="py-2 text-right font-medium">
											Profit
										</th>
									</tr>
								</thead>
								<tbody>
									{growthExamples.map(({ days, balance, profit }) => (
										<tr key={days} className="border-b">
											<th scope="row" className="py-2 pr-4 font-normal">
												{days} {days === 1 ? "day" : "days"}
											</th>
											<td className="py-2 pr-4 text-right">{balance}</td>
											<td className="py-2 text-right">{profit}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p>
							<a
								className="text-foreground underline underline-offset-4"
								href="#calculator"
							>
								Calculate growth for your own gem balance
							</a>
							.
						</p>
					</section>

					<section
						id="interest-formula"
						aria-labelledby="interest-formula-title"
						className="scroll-mt-6 flex flex-col gap-3"
					>
						<h2
							id="interest-formula-title"
							className="text-xl font-semibold text-foreground"
						>
							How EXP Bank compound interest is calculated
						</h2>
						<p>
							The gem calculator uses <strong>FV = PV × (1 + r)^t</strong>. FV
							is the future balance, PV is your starting balance, r is the daily
							rate of 0.003, and t is the duration in days. Profit is the future
							balance minus your starting balance.
						</p>
						<p>
							For 1,000 gems over 30 days:{" "}
							<strong>
								1,000 × 1.003^30 ≈ {growthExamples[2].balance} gems
							</strong>
							. Interest compounds because each period grows the balance
							including previously earned interest.
						</p>
						<p>
							One year is treated as 365 days and one month as 30 days. Shorter
							periods use the equivalent hourly rate, (1.003)^(1/24) − 1.
							Calculations run in your browser with high-precision arithmetic.
							Results are projections based on this fixed rate.
						</p>
					</section>

					<section
						aria-labelledby="rank-goals-title"
						className="flex flex-col gap-3"
					>
						<h2
							id="rank-goals-title"
							className="text-xl font-semibold text-foreground"
						>
							Plan gem goals and Discord rank milestones
						</h2>
						<p>
							Use the rank presets in Goal Gems to estimate the time needed to
							reach a milestone from your current balance. The calculator
							includes these thresholds:
						</p>
						<ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
							{getExpRanks()
								.filter((rank) => rank.name !== "Member")
								.map((rank) => (
									<li key={rank.name}>
										<strong>{rank.name}</strong>: {rank.displayValue} gems
									</li>
								))}
						</ul>
						<p>
							Read the{" "}
							<Link
								className="text-foreground underline underline-offset-4"
								href="/faq"
							>
								EXP Bank interest and goal FAQ
							</Link>{" "}
							or explore{" "}
							<Link
								className="text-foreground underline underline-offset-4"
								href="/tips"
							>
								gem growth tips and strategies
							</Link>{" "}
							for more planning examples.
						</p>
					</section>

					<section
						aria-labelledby="calculator-resources-title"
						className="flex flex-col gap-3"
					>
						<h2
							id="calculator-resources-title"
							className="text-xl font-semibold text-foreground"
						>
							About this calculator
						</h2>
						<p>
							Learn about the{" "}
							<Link
								className="text-foreground underline underline-offset-4"
								href="/about"
							>
								EXP Bank Calculator and its calculation model
							</Link>
							. For plain-text instructions and developer resources, read the{" "}
							<Link
								className="text-foreground underline underline-offset-4"
								href="/llms.txt"
							>
								agent guide
							</Link>{" "}
							or the{" "}
							<Link
								className="text-foreground underline underline-offset-4"
								href="/docs"
							>
								API docs
							</Link>
							.
						</p>
					</section>
				</div>
			</section>
		</>
	);
}
