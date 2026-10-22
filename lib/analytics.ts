type EventData = Record<string, string | number | boolean>;

type EventName =
	| "calculator_started"
	| "calculation_completed"
	| "goal_calculation_completed"
	| "market_calculation_completed"
	| "calculator_mode_changed"
	| "rank_selected"
	| "rank_multiplier_selected"
	| "validation_failed";

declare global {
	interface Window {
		umami?: {
			track: (name: string, data?: EventData) => Promise<unknown> | void;
		};
	}
}

const pendingEvents: Array<{ name: EventName; data?: EventData }> = [];

export function trackEvent(name: EventName, data?: EventData) {
	if (typeof window === "undefined") return;

	if (!window.umami) {
		// Keep early interactions until the deferred tracker is ready; bound the
		// queue when an extension blocks the tracker for the whole visit.
		if (pendingEvents.length < 50) pendingEvents.push({ name, data });
		return;
	}

	try {
		const request = window.umami.track(name, data);
		if (request) void request.catch(() => {});
	} catch {
		// Analytics must not interrupt calculations when the tracker is unavailable.
	}
}

export function flushAnalyticsEvents() {
	if (typeof window === "undefined" || !window.umami) return;
	for (const event of pendingEvents.splice(0)) trackEvent(event.name, event.data);
}
