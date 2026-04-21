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
			<div className="flex flex-col items-center justify-center min-h-[200px] p-8 animate-fade-in">
				<div className="relative h-8 w-8">
					<div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
					<div className="absolute inset-0 rounded-full border-2 border-t-transparent border-primary animate-spin"></div>
				</div>
				<p className="mt-4 text-muted-foreground animate-fade-in animate-stagger-1">Loading content...</p>
			</div>
    )
  }
  
  return <>{children}</>
} 