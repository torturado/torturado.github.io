"use client"

import { useState, useEffect, useRef } from "react"
import BigNumber from "bignumber.js"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { formatNumber, logBase, customExponentiation, formatDateUS } from "@/utils/bigNumberUtils"
import TechnicalInfoModal from "./TechnicalInfoModal"
import { InfoIcon } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import LoadingState from "./LoadingState"

const ONE = new BigNumber(1)

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

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    startTime: null,
    currentGems: new BigNumber(0),
    goalGems: null,
    additionalGems: null,
    initialTimeInDays: new BigNumber(0),
    dailyInterest: new BigNumber("0.0015"),
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

  const [results, setResults] = useState<Record<string, string> | null>(null)
  const [showTechnicalInfo, setShowTechnicalInfo] = useState(false)
  const [activeTab, setActiveTab] = useState("input")

  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const futureAmountIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Add a loading state
  const [isCalculatorReady, setIsCalculatorReady] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    
    // Track analytics event for important fields
    if (typeof window !== 'undefined' && window.trackEvent && ['currentGems', 'goalGems', 'additionalGems'].includes(e.target.name)) {
      window.trackEvent('Calculator Input', `Changed ${e.target.name}`, e.target.value)
    }
  }

  const handleSliderChange = (name: string, value: number[]) => {
    setInputs((prev) => ({ ...prev, [name]: value[0].toString() }))
  }

  const calculateResults = () => {
    clearInterval(updateIntervalRef.current!)
    clearInterval(futureAmountIntervalRef.current!)

    const currentGems = new BigNumber(inputs.currentGems)
    if (currentGems.isNaN() || currentGems.lte(0)) {
      alert("Please enter a valid number for Current Gems.")
      return
    }

    const newState: CalculatorState = {
      ...state,
      currentGems,
      goalGems: inputs.goalGems ? new BigNumber(inputs.goalGems) : null,
      additionalGems: inputs.additionalGems ? new BigNumber(inputs.additionalGems) : null,
      hourlyInterest: customExponentiation(ONE.plus(state.dailyInterest), new BigNumber(1).dividedBy(24)).minus(ONE),
      initialTimeInDays: new BigNumber(inputs.days || 0)
        .plus(new BigNumber(inputs.months || 0).times(30))
        .plus(new BigNumber(inputs.years || 0).times(365))
        .plus(new BigNumber(inputs.hours || 0).dividedBy(24))
        .plus(new BigNumber(inputs.minutes || 0).dividedBy(1440))
        .plus(new BigNumber(inputs.seconds || 0).dividedBy(86400)),
      startTime: Date.now(),
    }

    setState(newState)

    const updateResults = () => {
      const elapsedTime = (Date.now() - newState.startTime!) / 1000
      const profitPerSecond = newState.currentGems.times(newState.hourlyInterest!).dividedBy(3600)
      const totalProfit = profitPerSecond.times(elapsedTime)
      const currentTotal = newState.currentGems.plus(totalProfit)
      const profitGrowth = totalProfit.dividedBy(newState.currentGems).times(100)

      // Calcular todos los profits en tiempo real
      const currentProfitPerSecond = currentTotal.times(newState.hourlyInterest!).dividedBy(3600)
      const currentProfitPerMinute = currentProfitPerSecond.times(60)
      const currentProfitPerHour = currentProfitPerSecond.times(3600)
      const currentProfitPerDay = currentProfitPerSecond.times(86400)
      const currentProfitPerWeek = currentProfitPerSecond.times(604800)
      const currentProfitPerMonth = currentProfitPerSecond.times(2592000)

      const newResults: Record<string, string> = {
        currentGems: `Gems after ${Math.floor(elapsedTime / 86400)} day(s): ${formatNumber(currentTotal)}`,
        profit: `Profit: ${formatNumber(totalProfit)}`,
        profitGrowth: `Profit Growth (%): ${profitGrowth.toFixed(6)}%`,
        profitPerSecond: `Profit per second: ${formatNumber(currentProfitPerSecond)}`,
        profitPerMinute: `Profit per minute: ${formatNumber(currentProfitPerMinute)}`,
        profitPerHour: `Profit per hour: ${formatNumber(currentProfitPerHour)}`,
        profitPerDay: `Profit per day: ${formatNumber(currentProfitPerDay)}`,
        profitPerWeek: `Profit per week: ${formatNumber(currentProfitPerWeek)}`,
        profitPerMonth: `Profit per month: ${formatNumber(currentProfitPerMonth)}`
      }

      // Manejar Goal Gems
      if (newState.goalGems) {
        if (newState.goalGems.lte(newState.currentGems)) {
          newResults.timeToGoal = "Your current gems already meet or exceed the goal."
        } else {
          const timeToGoal = logBase(
            newState.goalGems.dividedBy(newState.currentGems),
            ONE.plus(newState.hourlyInterest!),
          ).dividedBy(24)

          const goalDate = new Date(Date.now() + timeToGoal.times(86400000).toNumber())
          newResults.timeToGoal = `You will reach your goal in ${timeToGoal.toFixed(2)} days (${formatDateUS(goalDate)})`
        }
      }

      // Manejar Additional Gems
      if (newState.additionalGems) {
        const targetTotal = newState.currentGems.plus(newState.additionalGems)
        const timeToAdditional = logBase(
          targetTotal.dividedBy(newState.currentGems),
          ONE.plus(newState.hourlyInterest!),
        ).dividedBy(24)

        const additionalDate = new Date(Date.now() + timeToAdditional.times(86400000).toNumber())
        newResults.timeToAdditional = `You will get ${formatNumber(newState.additionalGems)} additional gems in ${timeToAdditional.toFixed(2)} days (${formatDateUS(additionalDate)})`
      }

      setResults(newResults)
    }

    updateResults()
    updateIntervalRef.current = setInterval(updateResults, 100)
    futureAmountIntervalRef.current = setInterval(calculateFutureAmount, 1000)

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
        futureAmount: "The target date is in the past. Please select a future date.",
      }))
      return
    }

    const futureGems = state.currentGems.times(
      customExponentiation(ONE.plus(state.hourlyInterest!), totalDays.times(24)),
    )
    setResults((prev) => ({
      ...prev,
      futureAmount: `On ${formatDateUS(targetDate)}, you will have: ${formatNumber(futureGems)} gems`,
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
                      <InfoIcon className="h-4 w-4" />
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
            Calculate your EXP Bank earnings and plan your gem growth
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
                  <Label htmlFor="currentGems">Current Gems</Label>
                  <Input
                    id="currentGems"
                    type="number"
                    name="currentGems"
                    placeholder="Enter your current gems"
                    value={inputs.currentGems}
                    onChange={handleInputChange}
                    className="bg-card border-input text-card-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goalGems">Goal Gems (optional)</Label>
                  <Input
                    id="goalGems"
                    type="number"
                    name="goalGems"
                    placeholder="Enter your gem goal"
                    value={inputs.goalGems}
                    onChange={handleInputChange}
                    className="bg-card border-input text-card-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalGems">Additional Gems (optional)</Label>
                  <Input
                    id="additionalGems"
                    type="number"
                    name="additionalGems"
                    placeholder="Enter additional gems"
                    value={inputs.additionalGems}
                    onChange={handleInputChange}
                    className="bg-card border-input text-card-foreground"
                  />
                </div>
                <div className="space-y-4">
                  <Label>Time Period</Label>
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="targetDate">Target Date</Label>
                    <Input
                      id="targetDate"
                      type="date"
                      name="targetDate"
                      value={inputs.targetDate}
                      onChange={handleInputChange}
                      className="bg-card border-input text-card-foreground"
                    />
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
                <Button onClick={calculateResults} className="w-full bg-moonstone text-gunmetal hover:bg-moonstone/80">
                  Calculate!
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="results" className="space-y-4">
              {results ? (
                <div className="space-y-4">
                  {Object.entries(results).map(([key, value]) => (
                    <Card key={key} className="bg-card border-input">
                      <CardContent className="p-4">
                        <p className="text-card-foreground font-medium">{value}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-gunmetal">No results yet. Please enter your data and click Calculate!</p>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <TechnicalInfoModal isOpen={showTechnicalInfo} onClose={() => setShowTechnicalInfo(false)} />
      </Card>
    </LoadingState>
  )
}

