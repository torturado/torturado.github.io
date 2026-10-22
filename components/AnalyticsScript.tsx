"use client";

import Script from "next/script";
import { flushAnalyticsEvents } from "@/lib/analytics";

const UMAMI_URL = "https://umamita.derrumbar.top";
const UMAMI_WEBSITE_ID = "fc66d744-3b0f-4898-bf02-a4a4b24aaffc";

export function AnalyticsScript() {
	return (
		<Script
			defer
			strategy="afterInteractive"
			data-website-id={UMAMI_WEBSITE_ID}
			data-domains="torturado.github.io"
			data-performance="true"
			data-exclude-hash="true"
			src={`${UMAMI_URL}/script.js`}
			onReady={flushAnalyticsEvents}
			data-auto-track="true"
			data-do-not-track="false"
			data-cache="true"
		/>
	);
}
