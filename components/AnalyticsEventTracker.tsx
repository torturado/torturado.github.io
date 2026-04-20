"use client"

import { useEffect } from 'react'

interface AnalyticsEventTrackerProps {
  category: string
  action: string
  label?: string
  value?: number
  nonInteraction?: boolean
}

/**
 * Componente para rastrear eventos de Google Analytics
 * Úsalo para eventos importantes como:
 * - Clics en botones importantes
 * - Envío de formularios
 * - Interacciones con la calculadora
 * - Cambios de tema
 */
export default function AnalyticsEventTracker({
  category,
  action,
  label,
  value,
  nonInteraction = false
}: AnalyticsEventTrackerProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        non_interaction: nonInteraction
      })
    } else if (typeof window !== 'undefined' && window.trackEvent) {
      // Usa la función helper definida en layout.tsx
      window.trackEvent(category, action, label, value)
    }
  }, [category, action, label, value, nonInteraction])

  // Este componente no renderiza nada visible
  return null
}

// Añade tipos globales para TypeScript
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: any) => void
    trackEvent: (category: string, action: string, label?: string, value?: number) => void
  }
} 