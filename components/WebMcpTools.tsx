"use client";

import { useEffect } from "react";
import { calculateExpGrowth, getExpRanks, type ExpGrowthInput } from "@/lib/expCalculator";

type WebMcpTool = {
	name: string;
	description: string;
	inputSchema: Record<string, unknown>;
	execute: (input: unknown) => Promise<unknown> | unknown;
};

type WebMcpNavigator = Navigator & {
	modelContext?: {
		provideContext?: (options: { tools: WebMcpTool[] }) => Promise<unknown> | unknown;
		registerTool?: (tool: WebMcpTool) => Promise<unknown> | unknown;
		clearContext?: () => Promise<unknown> | unknown;
		unregisterTool?: (name: string) => Promise<unknown> | unknown;
	};
};

const normalizeExpInput = (input: unknown): ExpGrowthInput => {
	const source = typeof input === "object" && input !== null ? input as Record<string, unknown> : {};

	const readValue = (key: keyof ExpGrowthInput) => {
		const value = source[key];
		return typeof value === "number" || typeof value === "string" ? value : undefined;
	};

	return {
		currentGems: readValue("currentGems") ?? 0,
		goalGems: readValue("goalGems"),
		additionalGems: readValue("additionalGems"),
		years: readValue("years"),
		months: readValue("months"),
		days: readValue("days"),
		hours: readValue("hours"),
		minutes: readValue("minutes"),
		seconds: readValue("seconds"),
	};
};

const tools: WebMcpTool[] = [
	{
		name: "calculate-exp-growth",
		description:
			"Calculate EXP Bank gem growth for a deposit, optional time horizon, and optional goal amounts.",
		inputSchema: {
			type: "object",
			properties: {
				currentGems: {
					type: "number",
					description: "Current deposited gems. Must be greater than zero.",
					minimum: 0.00000001,
				},
				goalGems: {
					type: "number",
					description: "Optional total gem target to estimate time-to-goal.",
					minimum: 0,
				},
				additionalGems: {
					type: "number",
					description: "Optional extra gems to earn on top of the current deposit.",
					minimum: 0,
				},
				years: { type: "number", minimum: 0 },
				months: { type: "number", minimum: 0 },
				days: { type: "number", minimum: 0 },
				hours: { type: "number", minimum: 0 },
				minutes: { type: "number", minimum: 0 },
				seconds: { type: "number", minimum: 0 },
			},
			required: ["currentGems"],
			additionalProperties: false,
		},
		execute: async (input) => calculateExpGrowth(normalizeExpInput(input)),
	},
	{
		name: "list-exp-ranks",
		description:
			"Return the known EXP Discord rank thresholds used by the calculator presets.",
		inputSchema: {
			type: "object",
			properties: {},
			additionalProperties: false,
		},
		execute: async () => ({
			ranks: getExpRanks(),
			dailyInterest: "0.005",
		}),
	},
];

export function WebMcpTools() {
	useEffect(() => {
		const nav = navigator as WebMcpNavigator;
		const modelContext = nav.modelContext;

		if (!modelContext) {
			return;
		}

		const registerTools = async () => {
			try {
				if (typeof modelContext.provideContext === "function") {
					await modelContext.provideContext({ tools });
					return;
				}

				if (typeof modelContext.registerTool === "function") {
					for (const tool of tools) {
						await modelContext.registerTool(tool);
					}
				}
			} catch {
				// Ignore unstable preview API failures outside supported browsers.
			}
		};

		void registerTools();

		return () => {
			const unregisterTools = async () => {
				try {
					if (typeof modelContext.clearContext === "function") {
						await modelContext.clearContext();
						return;
					}

					if (typeof modelContext.unregisterTool === "function") {
						for (const tool of tools) {
							await modelContext.unregisterTool(tool.name);
						}
					}
				} catch {
					// Ignore cleanup failures from preview implementations.
				}
			};

			void unregisterTools();
		};
	}, []);

	return null;
}
