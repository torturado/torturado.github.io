# Project Structure


## File: .gitignore
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

## File: README.md
```markdown
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

```

## File: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
} 
```

## File: next-env.d.ts
```javascript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
```

## File: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
} 
```

## File: next-env.d.ts
```javascript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

## File: tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark_moss_green: {
          DEFAULT: "#606c38",
          100: "#13160b",
          200: "#262b16",
          300: "#394121",
          400: "#4c562c",
          500: "#606c38",
          600: "#88994f",
          700: "#a9b876",
          800: "#c5d0a3",
          900: "#e2e7d1",
        },
        pakistan_green: {
          DEFAULT: "#283618",
          100: "#080b05",
          200: "#101509",
          300: "#18200e",
          400: "#1f2a13",
          500: "#283618",
          600: "#547133",
          700: "#80ac4d",
          800: "#aac987",
          900: "#d5e4c3",
        },
        cornsilk: {
          DEFAULT: "#fefae0",
          100: "#5d5103",
          200: "#baa206",
          300: "#f8dc27",
          400: "#fbeb84",
          500: "#fefae0",
          600: "#fefbe7",
          700: "#fefced",
          800: "#fffdf3",
          900: "#fffef9",
        },
        earth_yellow: {
          DEFAULT: "#dda15e",
          100: "#34210b",
          200: "#684216",
          300: "#9d6321",
          400: "#d1842c",
          500: "#dda15e",
          600: "#e4b57f",
          700: "#ebc79f",
          800: "#f1dabf",
          900: "#f8ecdf",
        },
        tigers_eye: {
          DEFAULT: "#bc6c25",
          100: "#251507",
          200: "#4b2b0f",
          300: "#704016",
          400: "#96561e",
          500: "#bc6c25",
          600: "#d98840",
          700: "#e3a570",
          800: "#ecc3a0",
          900: "#f6e1cf",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
  
  
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    ".next/types/**/*.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

## File: @\components\ui\button.tsx
```javascript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

## File: app\globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
 
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
 
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
 
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
 
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
 
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
 
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
 
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
 
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
 
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
 
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
 
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
 
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
 
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
 
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
} 
```

## File: app\layout.tsx
```javascript
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EXP Bank Calculator",
  description: "Calculate your EXP Bank earnings",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


```

## File: app\page.tsx
```javascript
import Calculator from "../components/Calculator"

export default function Home() {
  return (
    <main className="min-h-screen bg-pakistan_green-900 flex items-center justify-center py-8">
      <Calculator />
    </main>
  )
}


```

## File: components\Calculator.tsx
```javascript
"use client"

import { useState, useEffect, useRef } from "react"
import BigNumber from "bignumber.js"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { formatNumber, logBase, customExponentiation, formatDateUS } from "@/utils/bigNumberUtils"
import TechnicalInfoModal from "./TechnicalInfoModal"

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

  const [inputs, setInputs] = useState({
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

  const [results, setResults] = useState<any>(null)
  const [showTechnicalInfo, setShowTechnicalInfo] = useState(false)

  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const futureAmountIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
      const currentTime = Date.now()
      const elapsedDays = new BigNumber(currentTime - newState.startTime!).dividedBy(1000).dividedBy(86400)
      const totalDays = newState.initialTimeInDays.plus(elapsedDays)
      const finalGems = newState.currentGems.times(
        customExponentiation(ONE.plus(newState.hourlyInterest!), totalDays.times(24)),
      )
      const profit = finalGems.minus(newState.currentGems)
      const profitGrowth = profit.dividedBy(newState.currentGems).times(100)

      const newResults: any = {
        gemsAfterTime: `Gems after ${totalDays.integerValue(BigNumber.ROUND_FLOOR).toString()} day(s): ${formatNumber(finalGems)}`,
        profit: `Profit: ${formatNumber(profit)}`,
        profitGrowth: `Profit Growth (%): ${profitGrowth.toFixed(6)}%`,
      }

      if (newState.goalGems && !newState.goalGems.isZero()) {
        if (newState.goalGems.lte(newState.currentGems)) {
          newResults.timeToReach = "Your current gems already meet or exceed the goal."
        } else {
          const daysToGoal = logBase(
            newState.goalGems.dividedBy(newState.currentGems),
            ONE.plus(newState.hourlyInterest!),
          ).dividedBy(24)
          const goalDate = new Date(newState.startTime! + daysToGoal.times(86400000).toNumber())
          newResults.timeToReach = `You will reach your goal on ${formatDateUS(goalDate)} (in ${daysToGoal.integerValue(BigNumber.ROUND_FLOOR).toString()} day(s)).`
        }
      } else if (newState.additionalGems && !newState.additionalGems.isZero()) {
        const targetGems = newState.currentGems.plus(newState.additionalGems)
        const daysToTarget = logBase(
          targetGems.dividedBy(newState.currentGems),
          ONE.plus(newState.hourlyInterest!),
        ).dividedBy(24)
        const targetDate = new Date(newState.startTime! + daysToTarget.times(86400000).toNumber())
        newResults.timeToReach = `You will get ${formatNumber(newState.additionalGems)} additional gems on ${formatDateUS(targetDate)} (in ${daysToTarget.integerValue(BigNumber.ROUND_FLOOR).toString()} day(s)).`
      }

      const profitPerSecond = profit.dividedBy(totalDays.times(86400))
      newResults.profitPerSecond = `Profit per second: ${formatNumber(profitPerSecond)}`
      newResults.profitPerMinute = `Profit per minute: ${formatNumber(profitPerSecond.times(60))}`
      newResults.profitPerHour = `Profit per hour: ${formatNumber(profitPerSecond.times(3600))}`
      newResults.profitPerDay = `Profit per day: ${formatNumber(profitPerSecond.times(86400))}`
      newResults.profitPerWeek = `Profit per week: ${formatNumber(profitPerSecond.times(604800))}`
      newResults.profitPerMonth = `Profit per month: ${formatNumber(profitPerSecond.times(2592000))}`

      setResults(newResults)
    }

    updateResults()
    updateIntervalRef.current = setInterval(updateResults, 100)
    futureAmountIntervalRef.current = setInterval(calculateFutureAmount, 1000)
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
  }

  useEffect(() => {
    return () => {
      clearInterval(updateIntervalRef.current!)
      clearInterval(futureAmountIntervalRef.current!)
    }
  }, [])

  return (
    <Card className="w-full max-w-3xl mx-auto bg-cornsilk">
      <CardHeader className="bg-dark_moss_green text-cornsilk">
        <CardTitle className="flex justify-between items-center">
          EXP Bank Calculator
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowTechnicalInfo(true)}
                  className="bg-cornsilk text-pakistan_green hover:bg-earth_yellow"
                >
                  i
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More technical information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="number"
          name="currentGems"
          placeholder="Current Gems"
          value={inputs.currentGems}
          onChange={handleInputChange}
          className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
        />
        <Input
          type="number"
          name="goalGems"
          placeholder="Goal Gems"
          value={inputs.goalGems}
          onChange={handleInputChange}
          className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
        />
        <Input
          type="number"
          name="additionalGems"
          placeholder="Additional Gems"
          value={inputs.additionalGems}
          onChange={handleInputChange}
          className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
        />
        <div className="grid grid-cols-6 gap-2">
          <Input
            type="number"
            name="years"
            placeholder="Y"
            value={inputs.years}
            onChange={handleInputChange}
            className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
          />
          <Input
            type="number"
            name="months"
            placeholder="M"
            value={inputs.months}
            onChange={handleInputChange}
            className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
          />
          <Input
            type="number"
            name="days"
            placeholder="D"
            value={inputs.days}
            onChange={handleInputChange}
            className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
          />
          <Input
            type="number"
            name="hours"
            placeholder="H"
            value={inputs.hours}
            onChange={handleInputChange}
            className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
          />
          <Input
            type="number"
            name="minutes"
            placeholder="M"
            value={inputs.minutes}
            onChange={handleInputChange}
            className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
          />
          <Input
            type="number"
            name="seconds"
            placeholder="S"
            value={inputs.seconds}
            onChange={handleInputChange}
            className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="date"
            name="targetDate"
            value={inputs.targetDate}
            onChange={handleInputChange}
            className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
          />
          <Input
            type="time"
            name="targetTime"
            value={inputs.targetTime}
            onChange={handleInputChange}
            className="bg-cornsilk-100 border-pakistan_green text-pakistan_green"
          />
        </div>
        <p className="text-pakistan_green">Daily Interest: {state.dailyInterest.times(100).toFixed(2)}%</p>
        <Button onClick={calculateResults} className="bg-tigers_eye text-cornsilk hover:bg-earth_yellow">
          Calculate!
        </Button>
        {results && (
          <div className="mt-4 space-y-2 text-pakistan_green">
            {Object.entries(results).map(([key, value]) => (
              <p key={key}>{value as string}</p>
            ))}
          </div>
        )}
      </CardContent>
      <TechnicalInfoModal isOpen={showTechnicalInfo} onClose={() => setShowTechnicalInfo(false)} />
    </Card>
  )
}


```

## File: components\Leaderboard.tsx
```javascript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Leaderboard() {
  const leaderboardData = [
    { name: "Player1 (EXP)", gems: "210M" },
    { name: "Player2 (EXP)", gems: "20M" },
    { name: "Player3 (EXP)", gems: "10M" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {leaderboardData.map((player, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>
                {index + 1}. {player.name}
              </span>
              <span>{player.gems} Gems</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}


```

## File: components\TechnicalInfoModal.tsx
```javascript
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface TechnicalInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TechnicalInfoModal({ isOpen, onClose }: TechnicalInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Technical Information</DialogTitle>
          <DialogDescription>
            Detailed explanation of the calculation process and implementation details.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-tigers_eye">Implementation Details</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>BigNumber.js Library:</strong> Used for precise decimal arithmetic, essential for
              handling large numbers and maintaining accuracy in financial calculations.
            </li>
            <li>
              <strong>Natural Logarithm (ln):</strong> Custom implementation using Taylor series for
              accurate calculations with large numbers, particularly useful in compound interest
              scenarios.
            </li>
            <li>
              <strong>Exponential Function (exp):</strong> Implemented using a Taylor series expansion,
              this function allows the calculation of exponents for any real number.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-tigers_eye">Calculation Process</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>User Input Conversion:</strong> All user inputs are converted to BigNumber
              objects, ensuring precise calculations.
            </li>
            <li>
              <strong>Daily Interest Rate Application:</strong> The daily interest rate is applied to
              the current gem balance using the compound interest formula.
            </li>
          </ol>
        </div>
      </DialogContent>
    </Dialog>
  )
}
    
    
```

## File: components\ui\button.tsx
```javascript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 
```

## File: components\ui\card.tsx
```javascript
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardContent } 
```

## File: components\ui\dialog.tsx
```javascript
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} 
```

## File: components\ui\input.tsx
```javascript
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input } 
```

## File: components\ui\tooltip.tsx
```javascript
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } 
```

## File: lib\utils.ts
```javascript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
} 
```

## File: public\index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

## File: public\manifest.json
```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

## File: public\robots.txt
```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

## File: utils\bigNumberUtils.tsx
```javascript
import BigNumber from "bignumber.js"

BigNumber.config({ DECIMAL_PLACES: 20, ROUNDING_MODE: BigNumber.ROUND_HALF_UP })

const ONE = new BigNumber(1)

export const formatNumber = (num: BigNumber, decimalPlaces = 0) => num.toFormat(decimalPlaces)

export const ln = (x: BigNumber): BigNumber => {
  if (x.lte(0)) throw new Error("ln(x) is undefined for x <= 0")
  if (x.eq(ONE)) return new BigNumber(0)

  const y = x.minus(ONE).dividedBy(x.plus(ONE))
  const y2 = y.times(y)
  let sum = y
  let term = y
  let n = new BigNumber(3)

  for (let i = 1; i <= 20; i++) {
    term = term.times(y2)
    sum = sum.plus(term.dividedBy(n))
    n = n.plus(2)
  }

  return sum.times(2)
}

export const logBase = (x: BigNumber, base: BigNumber): BigNumber => ln(x).dividedBy(ln(base))

export const exp = (x: BigNumber): BigNumber => {
  let sum = new BigNumber(1)
  let term = new BigNumber(1)
  let n = new BigNumber(1)

  for (let i = 1; i < 50; i++) {
    term = term.times(x).dividedBy(n)
    sum = sum.plus(term)
    n = n.plus(1)
  }

  return sum
}

export const customExponentiation = (base: BigNumber, exponent: BigNumber): BigNumber => {
  if (exponent.isInteger()) {
    return base.exponentiatedBy(exponent)
  }
  return exp(exponent.times(ln(base)))
}

export const formatDateUS = (date: Date): string => {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  })
}


```
