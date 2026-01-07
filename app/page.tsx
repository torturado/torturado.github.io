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
import Link from "next/link";
import Calculator from "../components/Calculator";

export default function Home() {
	return (
		<>
			<ChangelogModal />
			<main className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto">
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
									<Link href="/faq">
										<Button
											variant="ghost"
											size="icon"
											className="h-9 w-9"
										>
											<HelpCircle className="h-4 w-4" />
											<span className="sr-only">
												Help
											</span>
										</Button>
									</Link>
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
			</main>
		</>
	);
}
