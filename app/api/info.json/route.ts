export const dynamic = "force-static";

export function GET() {
	return new Response(
		JSON.stringify({
			name: "EXP Bank Calculator",
			description:
				"Static calculator information and links for agents and developers.",
			url: "https://torturado.github.io/",
			dailyInterestRate: "0.005",
			dailyInterestPercent: "0.50%",
			formula: "FV = PV x (1 + r)^t",
			timeNormalization: {
				yearDays: 365,
				monthDays: 30,
				hoursPerDay: 24,
				minutesPerDay: 1440,
				secondsPerDay: 86400,
			},
			calculationAccess: {
				staticJson: false,
				webMcp: true,
				webMcpTools: ["calculate-exp-growth", "list-exp-ranks"],
			},
			links: {
				documentation: "https://torturado.github.io/docs",
				openapi: "https://torturado.github.io/openapi.json",
				agentGuide: "https://torturado.github.io/llms.txt",
			},
		}),
		{
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
		},
	);
}
