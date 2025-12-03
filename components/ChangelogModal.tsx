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
const CURRENT_VERSION = "1.2.0";

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
];

export function ChangelogModal() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		// Check if user has seen this version
		const lastSeenVersion = localStorage.getItem(
			"lastSeenChangelogVersion"
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
				<div className="space-y-4">
					{CHANGELOG.map((change) => (
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
