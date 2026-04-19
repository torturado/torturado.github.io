"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

// This version number should be updated whenever you make changes to the changelog
const CURRENT_VERSION = "2.1.0";

interface Change {
	version: string;
	date: string;
	changes: string[];
}

const CHANGELOG: Change[] = [
	{
		version: "1.0.0",
		date: "2025-02-27",
		changes: ["Added tips/strategies and FAQ pages"],
	},
	{
		version: "1.0.1",
		date: "2025-02-27",
		changes: [
			"Update robots.txt and sitemap.xml",
			"Replace Google Analytics with Umami Analytics",
		],
	},
	{
		version: "1.0.2",
		date: "2025-04-16",
		changes: [
			"Simplified introduction and features text on the main page",
			"Replaced tips section with creator credit in the footer",
			"Added honorable mentions to the footer",
		],
	},
	{
		version: "1.0.3",
		date: "2025-06-18",
		changes: [
			"Reduced daily interest rate to 0.10%",
			"Updated calculator to use the new interest rate",
		],
	},
	{
		version: "1.1.0",
		date: "2025-06-30",
		changes: [
			"Major performance optimization for large numbers (10B+ gems)",
			"Implemented adaptive update intervals based on gem count and time periods",
			"Added intelligent caching system for expensive calculations",
			"Optimized mathematical functions (ln, exp, exponentiation) for better performance",
			"Improved real-time updates to maintain smooth 100-200ms intervals even with extreme values",
			"Enhanced user experience for calculations with very large gem amounts and long time periods",
		],
	},
	{
		version: "1.2.0",
		date: "2025-12-03",
		changes: [
			"Increased daily interest rate to 0.15%",
			"Updated calculator to use the new interest rate",
		],
	},
	{
		version: "1.3.0",
		date: "2026-01-07",
		changes: [
			"Increased daily interest rate to 0.25%",
			"Updated calculator to use the new interest rate",
		],
	},
	{
		version: "1.3.1",
		date: "2026-01-07",
		changes: [
			"Added Discord rank quick presets for Goal Gems (Ethereal, Luminary, Radiant, Catalyst, Divine, Cosmic)",
			"Added multiplier selector (x1, x2, x3...) when a rank is selected",
			"Added rank equivalence indicator with multipliers for custom gem values",
		],
	},
	{
		version: "2.0.0",
		date: "2026-01-07",
		changes: [
			"Complete UI redesign with functional minimalist approach",
			"New typography: replaced generic fonts with Geist for better readability",
			"Simplified color palette: clean neutrals with a single accent color",
			"Streamlined layout: removed unnecessary sections, keeping focus on the calculator",
			"Improved visual hierarchy between Input and Results tabs",
			"Minimized footer to essential links only",
			"Cleaner, distraction-free interface for faster calculations",
		],
	},
	{
		version: "2.0.1",
		date: "2026-02-11",
		changes: [
			"Increased daily interest rate to 0.40%",
			"Updated calculator to use the new interest rate",
			"Updated tips and FAQ pages to reflect the new rate",
		],
	},
	{
		version: "2.0.2",
		date: "2026-02-24",
		changes: [
			"Increased daily interest rate to 0.50%",
			"Updated calculator to use the new interest rate",
			"Updated tips and FAQ pages to reflect the new rate",
		],
	},
	{
		version: "2.1.0",
		date: "2026-04-19",
		changes: [
			"Upgraded the app to Next.js 16 and refreshed build/config settings",
			"Extracted calculator logic into a shared expCalculator utility for reuse outside the UI",
			"Added WebMCP browser tools plus agent-facing discovery files (agents.md, llms.txt, and .well-known manifests)",
			"Improved metadata, canonical links, viewport handling, and production security meta tags",
			"Enhanced accessibility with a skip link, stronger focus-visible styles, reduced-motion support, and clearer aria labels",
			"Lazy-loaded the calculator on the homepage and optimized the analytics script loading behavior",
			"Converted the calculator inputs into a semantic form with tool metadata for agent-assisted usage",
			"Upgraded Discord rank preset icons to next/image and improved quick preset accessibility",
			"Fixed manual Goal Gems rank detection so round values like 20B now map to the highest reached rank (Divine x1)",
			"Updated robots.txt and sitemap.xml to expose AI/agent discovery files and refreshed crawl metadata",
			"Automated .nojekyll generation during deploy and removed the legacy public/index.html export file",
		],
	},
];

export function ChangelogModal() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		// Check if user has seen this version
		const lastSeenVersion = localStorage.getItem(
			"lastSeenChangelogVersion",
		);

		if (!lastSeenVersion || lastSeenVersion !== CURRENT_VERSION) {
			setIsOpen(true);
			// Update the last seen version
			localStorage.setItem("lastSeenChangelogVersion", CURRENT_VERSION);
		}
	}, []);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>What's New</DialogTitle>
					<DialogDescription>
						Check out the latest improvements to the EXP Bank
						Calculator
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-4 max-h-[70vh] overflow-y-auto">
					{CHANGELOG.slice()
						.reverse()
						.slice(0, 5)
						.map((change) => (
							<div key={change.version} className="space-y-2">
								<div className="flex justify-between items-center">
									<h3 className="font-semibold">
										Version {change.version}
									</h3>
									<span className="text-sm text-muted-foreground">
										{change.date}
									</span>
								</div>
								<ul className="list-disc pl-5 space-y-1">
									{change.changes.map((item, index) => (
										<li key={index} className="text-sm">
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
				</div>
			</DialogContent>
		</Dialog>
	);
}
