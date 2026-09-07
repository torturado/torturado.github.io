import { getExpRanks } from "@/lib/expCalculator";

export const dynamic = "force-static";

export function GET() {
	return new Response(
		JSON.stringify({
			name: "EXP Bank Calculator",
			dailyInterestRate: "0.003",
			ranks: getExpRanks(),
		}),
		{
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
		},
	);
}
