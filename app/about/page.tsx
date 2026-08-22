import type { Metadata } from "next";
import Link from "next/link";
import { createRouteMetadata } from "../routeMetadata";

export const metadata: Metadata = createRouteMetadata({
	title: "About | EXP Bank Calculator",
	description:
		"About the EXP Bank Calculator, its calculation model, browser-first design, and public documentation.",
	canonicalPath: "/about",
	markdownPath: "/about.md",
});

export default function AboutPage() {
	return (
		<div className="container mx-auto max-w-4xl px-4 py-8">
			<h1 className="mb-6 text-3xl font-bold">About EXP Bank Calculator</h1>
			<div className="space-y-6 leading-7">
				<section>
					<h2 className="mb-3 text-2xl font-semibold">What this tool does</h2>
					<p>
						EXP Bank Calculator estimates how a gem balance changes
						when it compounds at a 0.50% daily rate. Enter a starting
						balance and a duration, target date, or goal amount. The
						calculator reports the projected balance, profit, growth
						percentage, income estimates, and the Discord rank
						thresholds reached by the balance.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-2xl font-semibold">How calculations work</h2>
					<p>
						The model uses FV = PV × (1 + r)^t. PV is the current gem
						balance, r is 0.005 per day, and t is the normalized
						duration in days. The calculator treats a year as 365
						days and a month as 30 days. It derives an hourly rate
						from the daily rate so short durations can be estimated
						without rounding the whole period to a day.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-2xl font-semibold">A local-first calculator</h2>
					<p>
						The calculator performs math in your browser. It does not
						require an account, and the inputs are not sent to an
						application server. Anonymous usage analytics are loaded
						separately and are described in the{" "}
						<Link className="underline underline-offset-4" href="/privacy">
							privacy policy
						</Link>
						. The result is an estimate, so compare it with the rules
						and balance shown by the EXP Bank service before making a
						decision.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-2xl font-semibold">Public resources</h2>
					<p>
						Agents can read the{" "}
						<Link className="underline underline-offset-4" href="/llms.txt">
							agent guide
						</Link>
						, use the{" "}
						<Link className="underline underline-offset-4" href="/docs">
							API docs
						</Link>
						, or use the browser WebMCP tools exposed on the calculator
						homepage. Questions and bug reports can be sent through the{" "}
						<Link className="underline underline-offset-4" href="/contact">
							contact page
						</Link>
						.
					</p>
				</section>
			</div>
		</div>
	);
}
