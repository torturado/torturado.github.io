import BigNumber from "bignumber.js";
import { customExponentiation, formatDateUS, logBase } from "@/utils/bigNumberUtils";

const ONE = new BigNumber(1);
const DAILY_INTEREST = new BigNumber("0.005");
const HOURLY_INTEREST = customExponentiation(
	ONE.plus(DAILY_INTEREST),
	new BigNumber(1).dividedBy(24),
).minus(ONE);

export interface ExpGrowthInput {
	currentGems: number | string;
	goalGems?: number | string;
	additionalGems?: number | string;
	years?: number | string;
	months?: number | string;
	days?: number | string;
	hours?: number | string;
	minutes?: number | string;
	seconds?: number | string;
}

export interface ExpRank {
	name: string;
	minGems: string;
	displayValue: string;
}

const EXP_RANKS: ExpRank[] = [
	{ name: "Member", minGems: "0", displayValue: "0M+" },
	{ name: "Ethereal", minGems: "160000000", displayValue: "160M+" },
	{ name: "Luminary", minGems: "800000000", displayValue: "800M+" },
	{ name: "Radiant", minGems: "1600000000", displayValue: "1.6B+" },
	{ name: "Catalyst", minGems: "4000000000", displayValue: "4B+" },
	{ name: "Divine", minGems: "12000000000", displayValue: "12B+" },
	{ name: "Cosmic", minGems: "48000000000", displayValue: "48B+" },
];

const toBigNumber = (value?: string | number) => {
	if (value === undefined || value === null || value === "") {
		return new BigNumber(0);
	}

	return new BigNumber(value);
};

const durationToDays = (input: ExpGrowthInput) =>
	toBigNumber(input.days)
		.plus(toBigNumber(input.months).times(30))
		.plus(toBigNumber(input.years).times(365))
		.plus(toBigNumber(input.hours).dividedBy(24))
		.plus(toBigNumber(input.minutes).dividedBy(1440))
		.plus(toBigNumber(input.seconds).dividedBy(86400));

const durationToObject = (durationInDays: BigNumber) => {
	const totalSeconds = durationInDays.times(86400).integerValue(BigNumber.ROUND_HALF_UP);
	const seconds = totalSeconds.modulo(60).toNumber();
	const totalMinutes = totalSeconds.dividedToIntegerBy(60);
	const minutes = totalMinutes.modulo(60).toNumber();
	const totalHours = totalMinutes.dividedToIntegerBy(60);
	const hours = totalHours.modulo(24).toNumber();
	const totalDays = totalHours.dividedToIntegerBy(24);
	const days = totalDays.modulo(30).toNumber();
	const totalMonths = totalDays.dividedToIntegerBy(30);
	const months = totalMonths.modulo(12).toNumber();
	const years = totalMonths.dividedToIntegerBy(12).toNumber();

	return {
		years,
		months,
		days,
		hours,
		minutes,
		seconds,
	};
};

const formatDuration = (durationInDays: BigNumber) => {
	if (durationInDays.isNaN() || durationInDays.lt(0)) {
		return "unavailable";
	}

	if (durationInDays.eq(0)) {
		return "now";
	}

	const parts = durationToObject(durationInDays);
	const labels: Array<[number, string]> = [
		[parts.years, "year"],
		[parts.months, "month"],
		[parts.days, "day"],
		[parts.hours, "hour"],
		[parts.minutes, "minute"],
		[parts.seconds, "second"],
	];

	const visible = labels
		.filter(([value]) => value > 0)
		.slice(0, 3)
		.map(([value, label]) => `${value} ${label}${value === 1 ? "" : "s"}`);

	return visible.length > 0 ? visible.join(", ") : "less than 1 second";
};

const getRankForValue = (value: BigNumber) => {
	let selected = EXP_RANKS[0];

	for (const rank of EXP_RANKS) {
		if (value.gte(rank.minGems)) {
			selected = rank;
		}
	}

	return selected;
};

const getTimeToTarget = (currentGems: BigNumber, targetGems: BigNumber) => {
	if (targetGems.lte(currentGems)) {
		return new BigNumber(0);
	}

	const interestBase = ONE.plus(HOURLY_INTEREST);
	const hoursToTarget = logBase(targetGems.dividedBy(currentGems), interestBase);

	return hoursToTarget.dividedBy(24);
};

export const getExpRanks = () => EXP_RANKS;

export const calculateExpGrowth = (input: ExpGrowthInput) => {
	const currentGems = toBigNumber(input.currentGems);

	if (currentGems.isNaN() || currentGems.lte(0)) {
		throw new Error("currentGems must be a number greater than zero.");
	}

	const durationInDays = durationToDays(input);
	const durationInHours = durationInDays.times(24);
	const interestBase = ONE.plus(HOURLY_INTEREST);
	const futureGems = currentGems.times(
		customExponentiation(interestBase, durationInHours),
	);
	const profit = futureGems.minus(currentGems);
	const goalGems = toBigNumber(input.goalGems);
	const additionalGems = toBigNumber(input.additionalGems);
	const timeToGoal = goalGems.gt(0)
		? getTimeToTarget(currentGems, goalGems)
		: null;
	const timeToAdditional = additionalGems.gt(0)
		? getTimeToTarget(currentGems, currentGems.plus(additionalGems))
		: null;
	const goalReachedAt = timeToGoal
		? new Date(Date.now() + timeToGoal.times(86400 * 1000).toNumber())
		: null;
	const additionalReachedAt = timeToAdditional
		? new Date(Date.now() + timeToAdditional.times(86400 * 1000).toNumber())
		: null;

	return {
		input: {
			currentGems: currentGems.toString(),
			durationDays: durationInDays.toString(),
			durationHours: durationInHours.toString(),
			dailyInterest: DAILY_INTEREST.toString(),
			hourlyInterest: HOURLY_INTEREST.toString(),
		},
		results: {
			futureGems: futureGems.toFixed(8),
			profit: profit.toFixed(8),
			profitGrowthPercent: profit.dividedBy(currentGems).times(100).toFixed(4),
			profitPerHour: currentGems.times(HOURLY_INTEREST).toFixed(8),
			profitPerDay: currentGems.times(DAILY_INTEREST).toFixed(8),
			currentRank: getRankForValue(currentGems),
			futureRank: getRankForValue(futureGems),
		},
		goals: {
			goalGems: goalGems.gt(0) ? goalGems.toString() : null,
			timeToGoal: timeToGoal
				? {
						days: timeToGoal.toFixed(8),
						human: formatDuration(timeToGoal),
						reachedAtUtc: goalReachedAt ? formatDateUS(goalReachedAt) : null,
					}
				: null,
			additionalGems: additionalGems.gt(0) ? additionalGems.toString() : null,
			timeToAdditional: timeToAdditional
				? {
						days: timeToAdditional.toFixed(8),
						human: formatDuration(timeToAdditional),
						reachedAtUtc: additionalReachedAt
							? formatDateUS(additionalReachedAt)
							: null,
					}
				: null,
		},
	};
};
