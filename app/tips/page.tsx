"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, TrendingUpIcon, PiggyBankIcon, CalculatorIcon, TargetIcon, ClockIcon } from 'lucide-react'

export default function TipsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="w-full">
        <CardHeader className="bg-card">
          <CardTitle className="text-2xl">Tips & Strategies</CardTitle>
          <CardDescription>
            Optimize your EXP Bank investments and achieve your gem growth goals
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 bg-card">
          <Tabs defaultValue="beginners" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginners">Beginners</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="beginners" className="space-y-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <PiggyBankIcon className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-xl">Getting Started with EXP Bank</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      The EXP Bank offers a 0.15% daily compound interest rate, making it an excellent way to grow your gems passively over time.
                    </p>
                    <h3 className="font-semibold text-lg mb-2">Beginner Tips:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Start by depositing any excess gems you won't need for immediate upgrades</li>
                      <li>Even small amounts grow significantly over time due to compound interest</li>
                      <li>Check your balance at least once a week to see your progress</li>
                      <li>Use our calculator to set a realistic first goal (e.g., 10% more than your initial deposit)</li>
                      <li>Reinvest your earned interest to maximize compound growth</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <CalculatorIcon className="h-5 w-5 text-green-500" />
                      <CardTitle className="text-xl">Basic Calculator Features</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our calculator has several features that are particularly useful for beginners:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Current Gems:</strong> Enter the amount you currently have or plan to deposit</li>
                      <li><strong>Time Period:</strong> Start with shorter periods (1-3 months) to see the immediate benefits</li>
                      <li><strong>Goal Gems:</strong> Set a target to reach, and the calculator will show how long it will take</li>
                      <li><strong>Future Date:</strong> See how many gems you'll have by a specific date</li>
                      <li><strong>Detailed Statistics:</strong> Review the profit per day, week, and month to understand your growth rate</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUpIcon className="h-5 w-5 text-purple-500" />
                      <CardTitle className="text-xl">The Power of Compound Interest</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Compound interest means you earn interest not just on your initial deposit, but also on the interest already accumulated.
                    </p>
                    <p className="mb-4">
                      This creates an exponential growth curve that accelerates over time:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>After 1 month: ~4.6% growth</li>
                      <li>After 6 months: ~30% growth</li>
                      <li>After 1 year: ~71% growth</li>
                      <li>After 2 years: ~240% growth</li>
                    </ul>
                    <p className="mt-4 font-semibold">
                      The longer you leave your gems deposited, the faster they will grow!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="intermediate" className="space-y-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <TargetIcon className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-xl">Setting Strategic Goals</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Setting intelligent goals can significantly improve your gem growth strategy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Milestone Goals:</strong> Set incremental goals (double your gems, then triple, etc.)</li>
                      <li><strong>Time-based Goals:</strong> Aim for specific amounts at 3-month, 6-month, and 1-year intervals</li>
                      <li><strong>Purpose-driven Goals:</strong> Calculate exactly how many gems you need for major purchases</li>
                      <li><strong>Stretch Goals:</strong> Set an ambitious but achievable target to stay motivated</li>
                    </ul>
                    <p className="mt-4">
                      Use the "Goal Gems" and "Additional Gems" features in our calculator to track progress toward multiple goals simultaneously.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-green-500" />
                      <CardTitle className="text-xl">Optimal Withdrawal Timing</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      The timing of withdrawals can have a significant impact on your long-term growth:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Try to withdraw only the interest earned, leaving your principal intact</li>
                      <li>If you need to make a large withdrawal, wait until just after an interest calculation cycle</li>
                      <li>Consider smaller, more frequent withdrawals instead of large lump sums</li>
                      <li>Use the Target Date calculator to find the optimal withdrawal time</li>
                      <li>Whenever possible, delay withdrawals to take advantage of exponential growth</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-purple-500" />
                      <CardTitle className="text-xl">Time vs. Amount: Finding Balance</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      There's a constant trade-off between the amount deposited and the time invested:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Doubling your deposit amount has the same effect as waiting for the first doubling period</li>
                      <li>For short-term goals (1-3 months), focus on depositing more gems</li>
                      <li>For long-term goals (6+ months), time becomes more valuable than initial deposit size</li>
                      <li>Use the calculator to find your "crossover point" where time value exceeds deposit value</li>
                    </ul>
                    <p className="mt-4 font-semibold">
                      The "Rule of 462": At 0.15% daily interest, your gems will double in approximately 462 days.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="space-y-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <CalculatorIcon className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-xl">Advanced Calculation Techniques</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Master these advanced calculator features to optimize your strategy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Reverse Calculation:</strong> Use the goal amount to determine the optimal initial deposit</li>
                      <li><strong>Compound Frequency Analysis:</strong> Compare daily vs. monthly compounding effects</li>
                      <li><strong>Multi-scenario Planning:</strong> Run multiple calculations with different parameters</li>
                      <li><strong>Threshold Detection:</strong> Find when your gems will cross important milestones</li>
                      <li><strong>Interest Rate Sensitivity:</strong> Understand how small changes in rate affect long-term growth</li>
                    </ul>
                    <p className="mt-4">
                      For advanced users managing billions of gems, use our optimization settings for performance.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUpIcon className="h-5 w-5 text-green-500" />
                      <CardTitle className="text-xl">Maximizing Growth with Partial Reinvestment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Advanced players can implement a partial reinvestment strategy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Calculate your daily interest earned using the detailed statistics</li>
                      <li>Withdraw a fixed percentage (e.g., 25-50%) of your daily interest</li>
                      <li>Reinvest the remainder to maintain compound growth</li>
                      <li>Gradually increase your withdrawal percentage as your principal grows</li>
                      <li>Create a withdrawal schedule based on your specific needs</li>
                    </ul>
                    <p className="mt-4 font-semibold">
                      This strategy provides a steady income stream while still allowing your principal to grow substantially over time.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <PiggyBankIcon className="h-5 w-5 text-purple-500" />
                      <CardTitle className="text-xl">Billion-Gem Strategies</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      For players with extremely large gem balances (1B+), consider these specialized strategies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Income Focus:</strong> With 1B+ gems, you can earn 1.5M+ gems daily in interest alone</li>
                      <li><strong>Split Deposits:</strong> Divide your gems between multiple accounts for different goals</li>
                      <li><strong>Cascading Withdrawals:</strong> Set up a schedule where you withdraw only from your oldest deposits</li>
                      <li><strong>Benchmark Tracking:</strong> Compare your growth to theoretical maximum rates</li>
                      <li><strong>Legacy Planning:</strong> Calculate gem inheritance across very long time spans</li>
                    </ul>
                    <p className="mt-4">
                      At these levels, even small optimizations can result in millions of additional gems over time.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <TargetIcon className="h-5 w-5 text-amber-500" />
                      <CardTitle className="text-xl">The Infinity Strategy</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      The ultimate EXP Bank strategy aims to reach a self-sustaining "infinity state":
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Grow your principal to a point where daily interest meets all your spending needs</li>
                      <li>Calculate your "infinity number" – the gem amount that generates your target daily income</li>
                      <li>Use the Goal Gems feature to track progress toward your infinity number</li>
                      <li>Once reached, withdraw only the interest, never touching the principal</li>
                      <li>Periodically reinvest a portion of interest to counter any economic changes</li>
                    </ul>
                    <p className="mt-4 font-semibold">
                      Example: A principal of 2 billion gems generates approximately 3 million gems daily in interest.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 