"use client"

import { useState, useEffect, useRef } from "react"
import React from "react"
import BigNumber from "bignumber.js"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Progress } from "./ui/progress"
import { formatNumber, logBase, customExponentiation, formatDateUS, ln, exp } from "@/utils/bigNumberUtils"
import TechnicalInfoModal from "./TechnicalInfoModal"
import { InfoIcon, HelpCircleIcon, AlertCircleIcon, TrendingUpIcon, ClockIcon, CalendarIcon, TargetIcon } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import LoadingState from "./LoadingState"
import Link from "next/link"
// Create an SVG wrapper to solve Dark Reader extension compatibility issue
const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return React.cloneElement(children as React.ReactElement, {
    // Strip out any data-darkreader attributes that might be added by extensions
    'data-darkreader-inline-stroke': undefined,
    'data-darkreader-inline-fill': undefined,
    style: undefined
  });
};

const ONE = new BigNumber(1)

// Performance optimization: Memoization cache for expensive calculations
const calculationMemoCache = new Map<string, { result: BigNumber; timestamp: number }>()
const CACHE_TTL = 5000 // 5 seconds cache for expensive calculations

// Helper function to get cached or calculate expensive operations
const getCachedExponentiation = (base: BigNumber, exponent: BigNumber): BigNumber => {
  const key = `${base.toString()}_${exponent.toString()}`
  const cached = calculationMemoCache.get(key)
  
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.result
  }
  
  const result = customExponentiation(base, exponent)
  calculationMemoCache.set(key, { result, timestamp: Date.now() })
  
  // Clean old cache entries periodically
  if (calculationMemoCache.size > 100) {
    const now = Date.now()
    const entries = Array.from(calculationMemoCache.entries())
    for (const [k, v] of entries) {
      if (now - v.timestamp > CACHE_TTL * 2) {
        calculationMemoCache.delete(k)
      }
    }
  }
  
  return result
}

// Optimized approximation for very large exponentiations
const fastExponentiation = (base: BigNumber, exponent: BigNumber): BigNumber => {
  // For very large exponents, use logarithmic approximation
  if (exponent.gt(10000)) {
    // e^(ln(base) * exponent) but with optimized calculation
    const lnBase = ln(base)
    const product = lnBase.times(exponent)
    return exp(product)
  }
  return getCachedExponentiation(base, exponent)
}

interface CalculatorState {
  startTime: number | null
  currentGems: BigNumber
  goalGems: BigNumber | null
  additionalGems: BigNumber | null
  initialTimeInDays: BigNumber
  dailyInterest: BigNumber
  hourlyInterest: BigNumber | null
}

interface CalculatorInputs {
  currentGems: string
  goalGems: string
  additionalGems: string
  years: string
  months: string
  days: string
  hours: string
  minutes: string
  seconds: string
  targetDate: string
  targetTime: string
}

interface FieldError {
  hasError: boolean;
  message: string;
}

interface Result {
  value: string;
  icon?: React.ReactNode;
  color?: string;
  progress?: number;
  progressColor?: string;
}

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    startTime: null,
    currentGems: new BigNumber(0),
    goalGems: null,
    additionalGems: null,
    initialTimeInDays: new BigNumber(0),
    dailyInterest: new BigNumber("0.0010"),
    hourlyInterest: null,
  })

  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentGems: "",
    goalGems: "",
    additionalGems: "",
    years: "",
    months: "",
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
    targetDate: "",
    targetTime: "",
  })

  const [results, setResults] = useState<Record<string, Result> | null>(null)
  const [showTechnicalInfo, setShowTechnicalInfo] = useState(false)
  const [activeTab, setActiveTab] = useState("input")

  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const futureAmountIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Add a loading state
  const [isCalculatorReady, setIsCalculatorReady] = useState(false)

  const [inputErrors, setInputErrors] = useState<Record<string, FieldError>>({
    currentGems: { hasError: false, message: "" },
    goalGems: { hasError: false, message: "" },
    additionalGems: { hasError: false, message: "" },
    targetDate: { hasError: false, message: "" }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    
    // Validate inputs in real-time
    validateField(name, value);
    
    // Track analytics event for important fields
    if (typeof window !== 'undefined' && window.trackEvent && ['currentGems', 'goalGems', 'additionalGems'].includes(name)) {
      window.trackEvent('Calculator Input', `Changed ${name}`, value);
    }
  }

  const validateField = (name: string, value: string) => {
    let error: FieldError = { hasError: false, message: "" };
    
    if (name === 'currentGems') {
      if (value === '') {
        error = { hasError: true, message: "This field is required" };
      } else if (new BigNumber(value).isNaN()) {
        error = { hasError: true, message: "Must be a valid number" };
      } else if (new BigNumber(value).lte(0)) {
        error = { hasError: true, message: "Must be greater than zero" };
      }
    } else if (name === 'goalGems' || name === 'additionalGems') {
      if (value !== '' && new BigNumber(value).isNaN()) {
        error = { hasError: true, message: "Must be a valid number" };
      } else if (value !== '' && new BigNumber(value).lte(0)) {
        error = { hasError: true, message: "Must be greater than zero" };
      }
    } else if (name === 'targetDate') {
      if (value !== '') {
        const targetDate = new Date(`${value}T00:00`);
        if (isNaN(targetDate.getTime())) {
          error = { hasError: true, message: "Invalid date" };
        } else if (targetDate < new Date()) {
          error = { hasError: true, message: "Date must be in the future" };
        }
      }
    }
    
    setInputErrors(prev => ({ ...prev, [name]: error }));
    return error;
  }

  const handleSliderChange = (name: string, value: number[]) => {
    setInputs((prev) => ({ ...prev, [name]: value[0].toString() }))
  }

  const calculateResults = () => {
    // Validate all fields before calculation
    let hasErrors = false;
    
    // Validate current gems (required field)
    const currentGemsError = validateField('currentGems', inputs.currentGems);
    if (currentGemsError.hasError) {
      hasErrors = true;
    }
    
    // Validate optional fields only if they have values
    if (inputs.goalGems) {
      const goalGemsError = validateField('goalGems', inputs.goalGems);
      if (goalGemsError.hasError) {
        hasErrors = true;
      }
    }
    
    if (inputs.additionalGems) {
      const additionalGemsError = validateField('additionalGems', inputs.additionalGems);
      if (additionalGemsError.hasError) {
        hasErrors = true;
      }
    }
    
    if (inputs.targetDate) {
      const targetDateError = validateField('targetDate', inputs.targetDate);
      if (targetDateError.hasError) {
        hasErrors = true;
      }
    }
    
    if (hasErrors) {
      return; // Stop calculation if there are errors
    }
    
    clearInterval(updateIntervalRef.current!)
    clearInterval(futureAmountIntervalRef.current!)

    const currentGems = new BigNumber(inputs.currentGems)
    if (currentGems.isNaN() || currentGems.lte(0)) {
      alert("Please enter a valid number for Current Gems.")
      return
    }

    // Calculate time period from inputs
    const initialTimeInDays = new BigNumber(inputs.days || 0)
      .plus(new BigNumber(inputs.months || 0).times(30))
      .plus(new BigNumber(inputs.years || 0).times(365))
      .plus(new BigNumber(inputs.hours || 0).dividedBy(24))
      .plus(new BigNumber(inputs.minutes || 0).dividedBy(1440))
      .plus(new BigNumber(inputs.seconds || 0).dividedBy(86400))

    const newState: CalculatorState = {
      ...state,
      currentGems,
      goalGems: inputs.goalGems ? new BigNumber(inputs.goalGems) : null,
      additionalGems: inputs.additionalGems ? new BigNumber(inputs.additionalGems) : null,
      hourlyInterest: customExponentiation(ONE.plus(state.dailyInterest), new BigNumber(1).dividedBy(24)).minus(ONE),
      initialTimeInDays,
      startTime: Date.now(),
    }

    setState(newState)

    // Enhanced cache for expensive calculations with better performance tracking
    let calculationCache = {
      futureGems: null as BigNumber | null,
      goalTimeCalc: null as {timeToGoal: BigNumber, progressPercent: number} | null,
      additionalTimeCalc: null as {timeToAdditional: BigNumber} | null,
      lastUpdateTime: 0,
      lastFullUpdateTime: 0,
      lastLightUpdateTime: 0,
      detailedStats: null as Record<string, Result> | null,
      goalResult: null as Result | null,
      additionalResult: null as Result | null,
      // Performance metrics
      baseCalculations: {
        profitPerSecond: null as BigNumber | null,
        hourlyInterestRate: null as BigNumber | null,
        lastCalculationTime: 0
      }
    };

    const updateResults = () => {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - newState.startTime!) / 1000;
      
      // Enhanced performance-based update strategy
      const totalTimeInSeconds = initialTimeInDays.times(86400);
      const isVeryLongTimePeriod = totalTimeInSeconds.gt(365 * 86400); // > 1 year
      const isLongTimePeriod = totalTimeInSeconds.gt(30 * 86400); // > 30 days
      const isMediumTimePeriod = totalTimeInSeconds.gt(7 * 86400); // > 7 days
      
      // More granular gem size categories for better performance
      const hasExtremeGems = newState.currentGems.gt(50000000000); // > 50B
      const hasVeryLargeGems = newState.currentGems.gt(10000000000); // > 10B
      const hasLargeGems = newState.currentGems.gt(1000000000); // > 1B
      
      // Adaptive intervals based on both time period and gem size
      const lightUpdateInterval = isVeryLongTimePeriod ? 300 :
                                  isLongTimePeriod ? 200 : 
                                  isMediumTimePeriod ? 150 : 
                                  hasExtremeGems ? 250 :
                                  hasVeryLargeGems ? 180 :
                                  hasLargeGems ? 130 : 100;
      
      const fullUpdateInterval = isVeryLongTimePeriod ? 3000 :
                                 isLongTimePeriod ? 2000 : 
                                 isMediumTimePeriod ? 1200 : 
                                 hasExtremeGems ? 2500 :
                                 hasVeryLargeGems ? 1800 :
                                 hasLargeGems ? 1200 : 500;
      
      const timeSinceLastUpdate = currentTime - calculationCache.lastUpdateTime;
      const timeSinceLastFullUpdate = currentTime - calculationCache.lastFullUpdateTime;
      const timeSinceLastLightUpdate = currentTime - calculationCache.lastLightUpdateTime;
      
      // Determine update type with more granular control
      const needsLightUpdate = timeSinceLastLightUpdate >= lightUpdateInterval;
      const needsFullUpdate = timeSinceLastFullUpdate >= fullUpdateInterval;
      
      // Skip update if not needed for performance
      if (!needsLightUpdate && !needsFullUpdate) return;
      
      // Cache base calculations to avoid repeated computation
      let profitPerSecond: BigNumber;
      if (calculationCache.baseCalculations.profitPerSecond && 
          currentTime - calculationCache.baseCalculations.lastCalculationTime < 1000) {
        profitPerSecond = calculationCache.baseCalculations.profitPerSecond;
      } else {
        profitPerSecond = newState.currentGems.times(newState.hourlyInterest!).dividedBy(3600);
        calculationCache.baseCalculations.profitPerSecond = profitPerSecond;
        calculationCache.baseCalculations.lastCalculationTime = currentTime;
      }
      
      const totalProfit = profitPerSecond.times(elapsedTime);
      const currentTotal = newState.currentGems.plus(totalProfit);
      const profitGrowth = totalProfit.dividedBy(newState.currentGems).times(100);
      
      if (needsLightUpdate) {
        calculationCache.lastLightUpdateTime = currentTime;
        calculationCache.lastUpdateTime = currentTime;
      }

      // Secondary calculations (only on full updates)
      let currentProfitPerSecond, currentProfitPerMinute, currentProfitPerHour, 
          currentProfitPerDay, currentProfitPerWeek, currentProfitPerMonth, futureGems;
      
      // Optimized future gems calculation with better caching and approximations
      if (initialTimeInDays.gt(0)) {
        if (needsFullUpdate || !calculationCache.futureGems) {
          // Use optimized exponentiation for very large calculations
          const hoursTotal = initialTimeInDays.times(24);
          const interestBase = ONE.plus(newState.hourlyInterest!);
          
          // For extremely large time periods or gem amounts, use fast approximation
          if (hoursTotal.gt(8760) || hasExtremeGems) { // > 1 year or > 50B gems
            futureGems = newState.currentGems.times(fastExponentiation(interestBase, hoursTotal));
          } else if (hoursTotal.gt(720) || hasVeryLargeGems) { // > 30 days or > 10B gems
            futureGems = newState.currentGems.times(getCachedExponentiation(interestBase, hoursTotal));
          } else {
            futureGems = newState.currentGems.times(customExponentiation(interestBase, hoursTotal));
          }
          
          calculationCache.futureGems = futureGems;
        } else {
          // Use cached value for light updates
          futureGems = calculationCache.futureGems;
        }
      }

      // Results object initialization with essential data
      const newResults: Record<string, Result> = {
        currentGems: { 
          value: `Current gems: ${formatNumber(currentTotal)}`,
          icon: <IconWrapper><TargetIcon className="h-5 w-5 text-primary" /></IconWrapper>,
          color: "text-primary font-semibold"
        },
        profit: { 
          value: `Profit: ${formatNumber(totalProfit)}`,
          icon: <IconWrapper><TrendingUpIcon className="h-5 w-5 text-green-500" /></IconWrapper>,
          color: "text-green-500"
        },
        profitGrowth: { 
          value: `Profit Growth: ${profitGrowth.toFixed(6)}%`,
          icon: <IconWrapper><TrendingUpIcon className="h-5 w-5 text-green-500" /></IconWrapper>,
          color: "text-green-500"
        }
      }
      
      // Add future gems calculation result if available
      if (futureGems && initialTimeInDays.gt(0)) {
        let timeDescription = "";
        if (new BigNumber(inputs.years || 0).gt(0)) {
          timeDescription += `${inputs.years} year(s) `;
        }
        if (new BigNumber(inputs.months || 0).gt(0)) {
          timeDescription += `${inputs.months} month(s) `;
        }
        if (new BigNumber(inputs.days || 0).gt(0)) {
          timeDescription += `${inputs.days} day(s) `;
        }
        if (new BigNumber(inputs.hours || 0).gt(0)) {
          timeDescription += `${inputs.hours} hour(s) `;
        }
        if (new BigNumber(inputs.minutes || 0).gt(0)) {
          timeDescription += `${inputs.minutes} minute(s) `;
        }
        if (new BigNumber(inputs.seconds || 0).gt(0)) {
          timeDescription += `${inputs.seconds} second(s)`;
        }
        
        const futureDate = new Date(Date.now() + initialTimeInDays.times(86400000).toNumber());
        
        newResults.specifiedTimeGems = {
          value: `After ${timeDescription.trim()}, you will have: ${formatNumber(futureGems)} gems (${formatDateUS(futureDate)})`,
          icon: <IconWrapper><CalendarIcon className="h-5 w-5 text-blue-500" /></IconWrapper>,
          color: "text-blue-500 font-semibold"
        };
      }
      
      // Only do these expensive calculations on full updates
      if (needsFullUpdate) {
        calculationCache.lastFullUpdateTime = currentTime;
        
        // Calculate detailed profit metrics for full updates
        currentProfitPerSecond = currentTotal.times(newState.hourlyInterest!).dividedBy(3600)
        currentProfitPerMinute = currentProfitPerSecond.times(60)
        currentProfitPerHour = currentProfitPerSecond.times(3600)
        currentProfitPerDay = currentProfitPerSecond.times(86400)
        currentProfitPerWeek = currentProfitPerSecond.times(604800)
        currentProfitPerMonth = currentProfitPerSecond.times(2592000)
        
        // Cache the detailed statistics
        const detailedStats: Record<string, Result> = {
          profitPerSecond: { 
            value: `Profit per second: ${formatNumber(currentProfitPerSecond)}`
          },
          profitPerMinute: { 
            value: `Profit per minute: ${formatNumber(currentProfitPerMinute)}`
          },
          profitPerHour: { 
            value: `Profit per hour: ${formatNumber(currentProfitPerHour)}`
          },
          profitPerDay: { 
            value: `Profit per day: ${formatNumber(currentProfitPerDay)}`
          },
          profitPerWeek: { 
            value: `Profit per week: ${formatNumber(currentProfitPerWeek)}`
          },
          profitPerMonth: { 
            value: `Profit per month: ${formatNumber(currentProfitPerMonth)}`
          }
        };
        
        // Store in cache
        calculationCache.detailedStats = detailedStats;
        
        // Add detailed stats to results
        Object.assign(newResults, detailedStats);
        
        // Optimized Goal Gems calculation with better caching strategy
        if (newState.goalGems) {
          if (newState.goalGems.lte(newState.currentGems)) {
            const goalResult = {
              value: "Your current gems already meet or exceed the goal.",
              icon: <IconWrapper><ClockIcon className="h-5 w-5 text-green-500" /></IconWrapper>,
              color: "text-green-500 font-medium"
            };
            newResults.timeToGoal = goalResult;
            calculationCache.goalResult = goalResult;
            calculationCache.goalTimeCalc = null;
          } else {
            // Enhanced caching strategy for goal calculations
            let timeToGoal: BigNumber;
            let progressPercent: number;
            
            // More aggressive caching for large numbers
            const shouldUseCache = calculationCache.goalTimeCalc && 
                                   (hasVeryLargeGems || hasExtremeGems);
            
            if (shouldUseCache) {
              timeToGoal = calculationCache.goalTimeCalc!.timeToGoal;
              // Recalculate progress more frequently as it changes
              progressPercent = Math.min((currentTotal.dividedBy(newState.goalGems).times(100)).toNumber(), 100);
            } else {
              // Optimized logarithm calculation for large numbers
              const ratio = newState.goalGems.dividedBy(newState.currentGems);
              const interestBase = ONE.plus(newState.hourlyInterest!);
              
              // Use cached logarithm if available
              const logKey = `log_${ratio.toString()}_${interestBase.toString()}`;
              const cachedLog = calculationMemoCache.get(logKey);
              
              if (cachedLog && Date.now() - cachedLog.timestamp < CACHE_TTL * 2) {
                timeToGoal = cachedLog.result.dividedBy(24);
              } else {
                timeToGoal = logBase(ratio, interestBase).dividedBy(24);
                calculationMemoCache.set(logKey, { 
                  result: timeToGoal.times(24), 
                  timestamp: Date.now() 
                });
              }
              
              progressPercent = Math.min((currentTotal.dividedBy(newState.goalGems).times(100)).toNumber(), 100);
              
              // Cache for next time with longer TTL for large numbers
              calculationCache.goalTimeCalc = { timeToGoal, progressPercent };
            }
            
            const goalDate = new Date(Date.now() + timeToGoal.times(86400000).toNumber());
            
            const goalResult = {
              value: `You will reach your goal in ${timeToGoal.toFixed(2)} days (${formatDateUS(goalDate)})`,
              icon: <IconWrapper><ClockIcon className="h-5 w-5 text-blue-500" /></IconWrapper>,
              color: "text-blue-500 font-medium",
              progress: progressPercent,
              progressColor: "bg-blue-500"
            };
            
            newResults.timeToGoal = goalResult;
            calculationCache.goalResult = goalResult;
          }
        }
        
        // Optimized Additional Gems calculation with enhanced caching
        if (newState.additionalGems) {
          let timeToAdditional: BigNumber;
          
          // More aggressive caching for large numbers
          const shouldUseCache = calculationCache.additionalTimeCalc && 
                                 (hasVeryLargeGems || hasExtremeGems);
          
          if (shouldUseCache) {
            timeToAdditional = calculationCache.additionalTimeCalc!.timeToAdditional;
          } else {
            const targetTotal = newState.currentGems.plus(newState.additionalGems);
            const ratio = targetTotal.dividedBy(newState.currentGems);
            const interestBase = ONE.plus(newState.hourlyInterest!);
            
            // Use cached logarithm calculation
            const logKey = `log_add_${ratio.toString()}_${interestBase.toString()}`;
            const cachedLog = calculationMemoCache.get(logKey);
            
            if (cachedLog && Date.now() - cachedLog.timestamp < CACHE_TTL * 2) {
              timeToAdditional = cachedLog.result.dividedBy(24);
            } else {
              timeToAdditional = logBase(ratio, interestBase).dividedBy(24);
              calculationMemoCache.set(logKey, { 
                result: timeToAdditional.times(24), 
                timestamp: Date.now() 
              });
            }
            
            // Cache for future use
            calculationCache.additionalTimeCalc = { timeToAdditional };
          }
          
          const additionalDate = new Date(Date.now() + timeToAdditional.times(86400000).toNumber());
          
          const additionalResult = {
            value: `You will get ${formatNumber(newState.additionalGems)} additional gems in ${timeToAdditional.toFixed(2)} days (${formatDateUS(additionalDate)})`,
            icon: <IconWrapper><CalendarIcon className="h-5 w-5 text-purple-500" /></IconWrapper>,
            color: "text-purple-500 font-medium"
          };
          
          newResults.timeToAdditional = additionalResult;
          calculationCache.additionalResult = additionalResult;
        }
      } else {
        // For light updates, add the cached detailed stats to ensure they're always displayed
        if (calculationCache.detailedStats) {
          Object.assign(newResults, calculationCache.detailedStats);
        }
        
        // Also add cached goal and additional gem results if they exist
        if (calculationCache.goalResult && newState.goalGems) {
          newResults.timeToGoal = calculationCache.goalResult;
        }
        
        if (calculationCache.additionalResult && newState.additionalGems) {
          newResults.timeToAdditional = calculationCache.additionalResult;
        }
      }

      setResults(newResults)
    }

    // Initial calculation
    updateResults()
    
    // Enhanced adaptive update frequency system
    const totalTimeInSeconds = initialTimeInDays.times(86400);
    const isVeryLongTimePeriod = totalTimeInSeconds.gt(365 * 86400); // > 1 year
    const isLongTimePeriod = totalTimeInSeconds.gt(30 * 86400); // > 30 days
    const isMediumTimePeriod = totalTimeInSeconds.gt(7 * 86400); // > 7 days
    
    // More granular gem size detection
    const hasExtremeGems = newState.currentGems.gt(50000000000); // > 50B
    const hasVeryLargeGems = newState.currentGems.gt(10000000000); // > 10B
    const hasLargeGems = newState.currentGems.gt(1000000000); // > 1B
    
    // Optimized base interval with better performance scaling
    const baseInterval = isVeryLongTimePeriod ? 250 :
                         isLongTimePeriod ? 180 : 
                         isMediumTimePeriod ? 140 :
                         hasExtremeGems ? 220 :
                         hasVeryLargeGems ? 160 :
                         hasLargeGems ? 130 : 100;
    
    updateIntervalRef.current = setInterval(updateResults, baseInterval);
    
    // Future amount calculation with much less frequent updates for large numbers
    const futureUpdateInterval = isVeryLongTimePeriod ? 4000 :
                                isLongTimePeriod ? 2500 :
                                isMediumTimePeriod ? 1500 :
                                hasExtremeGems ? 3500 :
                                hasVeryLargeGems ? 2000 :
                                hasLargeGems ? 1200 : 1000;
    
    futureAmountIntervalRef.current = setInterval(calculateFutureAmount, futureUpdateInterval);

    setActiveTab("results")
    
    // Track analytics event for calculation
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('Calculator', 'Calculate', `Gems: ${inputs.currentGems}`, Number(inputs.currentGems) || 0)
    }
  }

  const calculateFutureAmount = () => {
    if (!inputs.targetDate) return

    const targetDate = new Date(`${inputs.targetDate}T${inputs.targetTime || "00:00"}`)
    if (isNaN(targetDate.getTime())) {
      alert("Please enter a valid target date.")
      return
    }

    if (!state.startTime) {
      alert("Calculation has not been started. Please click 'Calculate!'")
      return
    }

    const futureDays = new BigNumber(targetDate.getTime() - state.startTime).dividedBy(86400000)
    const totalDays = state.initialTimeInDays.plus(futureDays)

    if (totalDays.lte(0)) {
      setResults((prev) => ({
        ...prev,
        futureAmount: {
          value: "The target date is in the past. Please select a future date.",
          icon: <IconWrapper><ClockIcon className="h-5 w-5 text-red-500" /></IconWrapper>,
          color: "text-red-500 font-medium"
        },
      }))
      return
    }

    const futureGems = state.currentGems.times(
      customExponentiation(ONE.plus(state.hourlyInterest!), totalDays.times(24)),
    )
    setResults((prev) => ({
      ...prev,
      futureAmount: {
        value: `On ${formatDateUS(targetDate)}, you will have: ${formatNumber(futureGems)} gems`,
        icon: <IconWrapper><CalendarIcon className="h-5 w-5 text-amber-500" /></IconWrapper>,
        color: "text-amber-500 font-medium"
      },
    }))
    
    // Track analytics event for future date calculation
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('Calculator', 'Future Calculation', formatDateUS(targetDate))
    }
  }

  useEffect(() => {
    // Mark calculator as ready after initial render
    setIsCalculatorReady(true)
    
    return () => {
      clearInterval(updateIntervalRef.current!)
      clearInterval(futureAmountIntervalRef.current!)
    }
  }, [])

  return (
    <LoadingState>
      <Card className="w-full">
        <CardHeader className="bg-card">
          <CardTitle className="text-2xl flex justify-between items-center">
            EXP Bank Calculator
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setShowTechnicalInfo(true)}
                    >
                      <IconWrapper><InfoIcon className="h-4 w-4" /></IconWrapper>
                      <span className="sr-only">Technical Information</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View technical information</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardTitle>
          <CardDescription>
            Calculate your EXP Bank earnings and plan your gem growth.
            <br />
            Made by @oyfg on Discord.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 bg-card">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 bg-charcoal text-bright_gray">
              <TabsTrigger value="input" className="data-[state=active]:bg-moonstone data-[state=active]:text-gunmetal">Input</TabsTrigger>
              <TabsTrigger value="results" className="data-[state=active]:bg-moonstone data-[state=active]:text-gunmetal">Results</TabsTrigger>
            </TabsList>
            <TabsContent value="input" className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="currentGems">Current Gems</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-4 w-4">
                            <IconWrapper><HelpCircleIcon className="h-4 w-4" /></IconWrapper>
                            <span className="sr-only">Information about current gems</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Enter the current amount of gems in your EXP bank. This field is required.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="currentGems"
                    type="number"
                    name="currentGems"
                    placeholder="Enter your current gems"
                    value={inputs.currentGems}
                    onChange={handleInputChange}
                    className={`bg-card border-input text-card-foreground ${inputErrors.currentGems.hasError ? "border-red-500" : ""}`}
                  />
                  {inputErrors.currentGems.hasError && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <IconWrapper><AlertCircleIcon className="h-3 w-3 mr-1" /></IconWrapper>
                      {inputErrors.currentGems.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="goalGems">Goal Gems (optional)</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-4 w-4">
                            <IconWrapper><HelpCircleIcon className="h-4 w-4" /></IconWrapper>
                            <span className="sr-only">Information about goal gems</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Set a gem goal. The calculator will tell you when you'll reach this amount.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="goalGems"
                    type="number"
                    name="goalGems"
                    placeholder="Enter your gem goal"
                    value={inputs.goalGems}
                    onChange={handleInputChange}
                    className={`bg-card border-input text-card-foreground ${inputErrors.goalGems.hasError ? "border-red-500" : ""}`}
                  />
                  {inputErrors.goalGems.hasError && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <IconWrapper><AlertCircleIcon className="h-3 w-3 mr-1" /></IconWrapper>
                      {inputErrors.goalGems.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="additionalGems">Additional Gems (optional)</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-4 w-4">
                            <IconWrapper><HelpCircleIcon className="h-4 w-4" /></IconWrapper>
                            <span className="sr-only">Information about additional gems</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Additional gems you want to calculate. The calculator will tell you how long it will take to earn this amount.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="additionalGems"
                    type="number"
                    name="additionalGems"
                    placeholder="Enter additional gems"
                    value={inputs.additionalGems}
                    onChange={handleInputChange}
                    className={`bg-card border-input text-card-foreground ${inputErrors.additionalGems.hasError ? "border-red-500" : ""}`}
                  />
                  {inputErrors.additionalGems.hasError && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <IconWrapper><AlertCircleIcon className="h-3 w-3 mr-1" /></IconWrapper>
                      {inputErrors.additionalGems.message}
                    </p>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Time Period</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-4 w-4">
                            <IconWrapper><HelpCircleIcon className="h-4 w-4" /></IconWrapper>
                            <span className="sr-only">Information about time period</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Set a time period for the calculation. You can use the sliders or enter values directly.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {["years", "months", "days", "hours", "minutes", "seconds"].map((unit) => (
                      <div key={unit} className="space-y-2">
                        <Label htmlFor={unit}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</Label>
                        <Slider
                          id={unit}
                          min={0}
                          max={unit === "years" ? 100 : unit === "months" ? 12 : unit === "days" ? 31 : 59}
                          step={1}
                          value={[parseInt(inputs[unit as keyof CalculatorInputs] || "0")]}
                          onValueChange={(value) => handleSliderChange(unit, value)}
                        />
                        <Input
                          type="number"
                          name={unit}
                          value={inputs[unit as keyof CalculatorInputs]}
                          onChange={handleInputChange}
                          className="bg-card border-input text-card-foreground"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="targetDate">Target Date</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-4 w-4">
                              <IconWrapper><HelpCircleIcon className="h-4 w-4" /></IconWrapper>
                              <span className="sr-only">Information about target date</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Set a future date to calculate how many gems you'll have at that time.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Input
                      id="targetDate"
                      type="date"
                      name="targetDate"
                      value={inputs.targetDate}
                      onChange={handleInputChange}
                      className={`bg-card border-input text-card-foreground ${inputErrors.targetDate.hasError ? "border-red-500" : ""}`}
                    />
                    {inputErrors.targetDate.hasError && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <IconWrapper><AlertCircleIcon className="h-3 w-3 mr-1" /></IconWrapper>
                        {inputErrors.targetDate.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="targetTime">Target Time</Label>
                    <Input
                      id="targetTime"
                      type="time"
                      name="targetTime"
                      value={inputs.targetTime}
                      onChange={handleInputChange}
                      className="bg-card border-input text-card-foreground"
                    />
                  </div>
                </div>
                <p className="text-gunmetal">Daily Interest: {state.dailyInterest.times(100).toFixed(2)}%</p>
                <Button 
                  onClick={calculateResults} 
                  className="w-full bg-moonstone text-gunmetal hover:bg-moonstone/80 transition-all duration-300 text-lg font-medium py-2"
                >
                  Calculate!
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="results" className="space-y-6">
              {results ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(results)
                      .filter(([key]) => ['specifiedTimeGems', 'currentGems', 'profit', 'profitGrowth', 'timeToGoal', 'timeToAdditional'].includes(key))
                      .map(([key, result]) => (
                        <Card key={key} className="bg-card border-input overflow-hidden">
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-2">
                              {result.icon && <div>{result.icon}</div>}
                              <div className="flex-1">
                                <p className={`font-medium ${result.color || 'text-card-foreground'}`}>{result.value}</p>
                                {result.progress !== undefined && (
                                  <div className="mt-2">
                                    <Progress value={result.progress} className={`h-2 ${result.progressColor || 'bg-primary'}`} />
                                    <p className="text-xs text-right mt-1">{result.progress.toFixed(2)}%</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-medium mb-3">Detailed Statistics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(results)
                        .filter(([key]) => ['profitPerSecond', 'profitPerMinute', 'profitPerHour', 'profitPerDay', 'profitPerWeek', 'profitPerMonth'].includes(key))
                        .map(([key, result]) => (
                          <Card key={key} className="bg-card border-input">
                            <CardContent className="p-3">
                              <p className="text-sm font-medium text-card-foreground">{result.value}</p>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                  
                  {results.futureAmount && (
                    <Card className="bg-card border-input">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <IconWrapper><CalendarIcon className="h-5 w-5 text-amber-500" /></IconWrapper>
                          <p className="text-amber-500 font-medium">{results.futureAmount.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="mt-4 text-center">
                    <Button 
                      onClick={() => setActiveTab("input")} 
                      variant="outline" 
                      className="hover:bg-primary/10"
                    >
                      Return to Calculator
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gunmetal text-lg mb-4">No results yet. Please enter your data and click Calculate!</p>
                  <Button 
                    onClick={() => setActiveTab("input")} 
                    variant="outline" 
                    className="hover:bg-primary/10"
                  >
                    Return to Calculator
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <TechnicalInfoModal isOpen={showTechnicalInfo} onClose={() => setShowTechnicalInfo(false)} />
      </Card>
    </LoadingState>
  )
}
