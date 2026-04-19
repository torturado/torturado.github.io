"use client"

type EventData = Record<string, string | number | boolean>

export const useAnalytics = () => {
  const trackEvent = (eventName: string, eventData?: EventData) => {
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track(eventName, eventData)
    }
  }

  return {
    trackEvent,
    // Eventos específicos de la calculadora
    trackCalculation: (amount: number) => 
      trackEvent('calculation', { 
        amount,
        timestamp: new Date().toISOString()
      }),
    
    trackGoalSet: (goal: number) => 
      trackEvent('goal_set', { 
        goal,
        timestamp: new Date().toISOString()
      }),
    
    trackTimeframeChange: (timeframe: string) => 
      trackEvent('timeframe_change', { 
        timeframe,
        timestamp: new Date().toISOString()
      }),

    // Eventos de interacción
    trackThemeChange: (theme: string) =>
      trackEvent('theme_change', { theme }),
    
    trackFeatureUse: (feature: string) =>
      trackEvent('feature_use', { feature }),
    
    trackError: (error: string, context: string) =>
      trackEvent('error', { error, context })
  }
} 