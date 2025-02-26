"use client"

import { useEffect, useState } from 'react'

interface LoadingStateProps {
  children: React.ReactNode
  minimumLoadingTime?: number
}

export default function LoadingState({ 
  children, 
  minimumLoadingTime = 1000 
}: LoadingStateProps) {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Set a minimum loading time to prevent flashing content
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, minimumLoadingTime)
    
    return () => clearTimeout(timer)
  }, [minimumLoadingTime])
  
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
        <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        <p className="mt-4 text-muted-foreground">Loading content...</p>
      </div>
    )
  }
  
  return <>{children}</>
} 