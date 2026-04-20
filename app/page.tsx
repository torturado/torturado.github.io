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
			<ChangelogModal />
			<section className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto">
				{/* Header - minimal */}
				<header className="flex items-center justify-between mb-8">
					<div>
						<h1 className="text-2xl font-semibold tracking-tight">
							EXP Bank Calculator
						</h1>
						<p className="text-muted-foreground text-sm mt-1">
							Calculate your gem growth.
						</p>
					</div>
					<div className="flex items-center gap-2">
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

				{/* Calculator - single focus */}
				<section id="calculator">
					<Calculator />
				</section>
			</section>
		</>
	);
}
