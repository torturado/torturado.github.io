"use client"

import Script from 'next/script'

export function AnalyticsScript() {
  const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  const UMAMI_URL = process.env.NEXT_PUBLIC_UMAMI_URL

  if (!UMAMI_WEBSITE_ID || !UMAMI_URL) {
    console.warn('Faltan variables de entorno para Umami Analytics')
    return null
  }

  return (
    <Script
      async
      defer
      data-website-id={UMAMI_WEBSITE_ID}
      src={`${UMAMI_URL}/script.js`}
      data-auto-track="true"
      data-do-not-track="false"
      data-cache="true"
    />
  )
} 