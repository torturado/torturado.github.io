import Link from "next/link";

export function FAQPageContent() {
	return (
		<div className="mx-auto max-w-3xl px-4 py-8">
			<header className="mb-8 flex flex-col gap-3">
				<h1 className="text-3xl font-semibold tracking-tight">EXP Bank FAQ</h1>
				<p className="leading-7 text-muted-foreground">
					Answers about gem growth, daily compound interest, and using the EXP
					Bank calculator to plan your goals.
				</p>
				<nav
					aria-label="FAQ resources"
					className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
				>
					<Link className="underline underline-offset-4" href="/#calculator">
						Open the EXP Bank calculator
					</Link>
					<Link
						className="underline underline-offset-4"
						href="/#growth-examples"
					>
						See gem growth examples
					</Link>
					<Link className="underline underline-offset-4" href="/tips">
						Gem growth tips
					</Link>
				</nav>
			</header>

			<div className="flex flex-col gap-8 leading-7 text-muted-foreground">
				<section id="what-is-exp-bank" className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold text-foreground">
						What is EXP Bank?
					</h2>
					<p>
						EXP Bank is the gem-deposit system modeled by this calculator. The
						tool estimates how a starting gem balance grows at a fixed 0.30%
						daily compound interest rate. It also estimates time to a target
						balance and Discord rank milestones.
					</p>
				</section>

				<section id="interest-formula" className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold text-foreground">
						How is EXP Bank gem interest calculated?
					</h2>
					<p>
						The formula is <strong>FV = PV × (1 + r)^t</strong>, where FV is
						your future balance, PV is your current gems, r is 0.003 (the 0.30%
						daily rate), and t is the duration in days. Interest compounds: each
						period grows the balance including the interest already earned.
					</p>
					<p>
						For example, 1,000 gems become approximately 1,094.03 gems after 30
						days, a profit of 94.03 gems. See the{" "}
						<Link
							className="text-foreground underline underline-offset-4"
							href="/#growth-examples"
						>
							gem growth examples
						</Link>{" "}
						for other durations.
					</p>
				</section>

				<section id="doubling-time" className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold text-foreground">
						How long does it take to double your gems?
					</h2>
					<p>
						At 0.30% daily compound interest, doubling takes about 231.4 days,
						using t = ln(2) / ln(1.003). For example, a balance of 1,000 gems
						reaches 2,000 gems after that time in the calculator&apos;s model.
						If you count only complete days, the balance first exceeds double
						after 232 days.
					</p>
				</section>

				<section id="goal-gems" className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold text-foreground">
						How do I use Goal Gems and Additional Gems?
					</h2>
					<p>
						Enter your starting balance in <strong>Current Gems</strong>. Use{" "}
						<strong>Goal Gems</strong> for the total balance you want to reach,
						or <strong>Additional Gems</strong> for the extra amount you want to
						earn. Then select Calculate to see the estimated time to each
						target.
					</p>
					<p>
						With 1,000 current gems, Goal Gems of 2,000 and Additional Gems of
						1,000 describe the same target. Additional Gems is a profit goal,
						not a new deposit. Rank presets let you select a Discord milestone
						as your goal.
					</p>
				</section>

				<section id="time-periods" className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold text-foreground">
						What is the difference between a time period and a target date?
					</h2>
					<p>
						A time period specifies how long your gems grow, using years,
						months, days, hours, minutes, or seconds. The calculator treats one
						year as 365 days and one month as 30 days. A Target Date and
						optional Target Time use the interval from now to that calendar date
						instead.
					</p>
					<p>
						Shorter periods use an equivalent hourly rate derived from the daily
						rate: (1.003)^(1/24) − 1.
					</p>
				</section>

				<section id="accuracy" className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold text-foreground">
						How accurate is the EXP calculator?
					</h2>
					<p>
						The calculator uses high-precision arithmetic to handle large gem
						balances. Displayed values are rounded, and results depend on the
						fixed 0.30% daily rate and the chosen duration. They are estimates;
						the EXP Bank service may apply different rounding or crediting
						rules.
					</p>
					<p>
						Read more about the{" "}
						<Link
							className="text-foreground underline underline-offset-4"
							href="/about"
						>
							calculation model
						</Link>
						.
					</p>
				</section>

				<section id="deposits-withdrawals" className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold text-foreground">
						Can I calculate multiple deposits or withdrawals?
					</h2>
					<p>
						Each calculation models one starting balance without later
						transactions. To estimate a later deposit or withdrawal, calculate
						growth up to that point, adjust the resulting balance, and use it as
						Current Gems for the next period. Repeat for each transaction.
					</p>
				</section>

				<section id="bank-rules" className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold text-foreground">
						Are there deposit limits, withdrawal fees, or rate changes?
					</h2>
					<p>
						The calculator accepts a positive starting balance and uses a fixed
						0.30% daily rate. It does not check account eligibility, deposit
						limits, withdrawal fees, or changes to the bank&apos;s rules. Check
						those details directly with the EXP Bank service.
					</p>
				</section>

				<section id="feedback" className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold text-foreground">
						How can I report a calculator issue?
					</h2>
					<p>
						Use the{" "}
						<Link
							className="text-foreground underline underline-offset-4"
							href="/contact"
						>
							contact page
						</Link>{" "}
						or the{" "}
						<a
							className="text-foreground underline underline-offset-4"
							href="https://github.com/torturado/torturado.github.io/issues"
						>
							GitHub issue tracker
						</a>
						. Include the inputs, the result you received, and what you expected
						so the calculation can be reproduced.
					</p>
				</section>
			</div>
		</div>
	);
}
