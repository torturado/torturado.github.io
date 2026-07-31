"use client"

import Script from 'next/script'

const UMAMI_URL = 'https://umamita.derrumbar.top'
const UMAMI_WEBSITE_ID = 'fc66d744-3b0f-4898-bf02-a4a4b24aaffc'

export function AnalyticsScript() {
  return (
    <>
      <Script
        defer
        strategy="afterInteractive"
        data-website-id={UMAMI_WEBSITE_ID}
        src={`${UMAMI_URL}/script.js`}
        data-auto-track="true"
        data-do-not-track="false"
        data-cache="true"
      />
      <Script
        defer
        strategy="afterInteractive"
        data-website-id={UMAMI_WEBSITE_ID}
        src={`${UMAMI_URL}/recorder.js`}
      />
    </>
  )
}
