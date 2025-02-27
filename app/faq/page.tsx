"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="w-full">
        <CardHeader className="bg-card">
          <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          <CardDescription>
            Find answers to common questions about the EXP Bank system and calculator
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 bg-card">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                What is the EXP Bank?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  The EXP Bank is a special financial system that allows players to deposit gems and earn compound interest over time. 
                  With a fixed 0.15% daily interest rate, the bank provides a reliable way to grow your gem wealth passively.
                </p>
                <p className="mt-2">
                  Unlike traditional investments, the EXP Bank guarantees this rate regardless of market conditions, making it an 
                  excellent option for both new and experienced players looking to maximize their long-term gem growth.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                How is interest calculated?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  Interest in the EXP Bank is calculated using compound interest at a daily rate of 0.15%. Compound interest means you 
                  earn interest not only on your initial deposit but also on the interest already accumulated.
                </p>
                <p className="mt-2">
                  The formula used is: <strong>FV = PV × (1 + r)^t</strong> where:
                </p>
                <ul className="list-disc mt-2 ml-6">
                  <li><strong>FV</strong> = Final value (future amount of gems)</li>
                  <li><strong>PV</strong> = Present value (current deposit amount)</li>
                  <li><strong>r</strong> = Interest rate per period (0.0015 or 0.15% daily)</li>
                  <li><strong>t</strong> = Number of time periods (days)</li>
                </ul>
                <p className="mt-2">
                  Interest is calculated and credited to your account automatically at the end of each day.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                How accurate is the calculator?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  Our calculator provides highly accurate results using the BigNumber.js library, which ensures precision even when 
                  dealing with extremely large numbers (billions of gems). The calculations match exactly what you'll receive in the 
                  actual EXP Bank system.
                </p>
                <p className="mt-2">
                  For very long time periods (multiple years) or extremely large gem amounts (trillions+), there might be minor 
                  rounding differences, but these are negligible for practical purposes. All time calculations account for leap years 
                  and accurate day counts between dates.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                Can I withdraw my gems at any time?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  Yes, you can withdraw your gems from the EXP Bank at any time without penalties. However, to maximize your returns, 
                  it's generally recommended to leave your gems deposited for longer periods to take advantage of compound interest.
                </p>
                <p className="mt-2">
                  Keep in mind that once you withdraw gems, you'll no longer earn interest on that amount. You can use our calculator's 
                  "Goal Gems" feature to determine the optimal time to withdraw if you're saving for a specific amount.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                Is there a minimum or maximum deposit amount?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  The EXP Bank has a minimum deposit requirement of 100 gems to open an account. There is no maximum limit to how many 
                  gems you can deposit, and the system can handle amounts in the billions or even trillions.
                </p>
                <p className="mt-2">
                  For extremely large deposits (over 1 billion gems), our calculator has special optimization features to ensure 
                  accurate and responsive calculations even with massive numbers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                How do I use the Goal Gems feature?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  The Goal Gems feature helps you determine how long it will take to reach a specific gem amount. To use it:
                </p>
                <ol className="list-decimal mt-2 ml-6">
                  <li>Enter your current gem amount in the "Current Gems" field</li>
                  <li>Enter your target amount in the "Goal Gems" field</li>
                  <li>The calculator will automatically display how many days, months, and years it will take to reach your goal</li>
                </ol>
                <p className="mt-2">
                  This feature is particularly useful for planning major purchases or setting savings milestones. You can also combine 
                  it with the time period calculator to see how close you'll get to your goal within a specific timeframe.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">
                What's the difference between "Future Date" and "Time Period" calculations?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  Both features calculate your future gem amount, but they approach time differently:
                </p>
                <ul className="list-disc mt-2 ml-6">
                  <li>
                    <strong>Time Period</strong>: Calculates growth over a specific duration (e.g., 3 months, 1 year) from today. 
                    This is useful when you want to know your returns after a certain investment period.
                  </li>
                  <li>
                    <strong>Future Date</strong>: Calculates growth up to a specific calendar date (e.g., December 31, 2023). 
                    This is useful when you have a target date in mind, such as saving for something on a specific date.
                  </li>
                </ul>
                <p className="mt-2">
                  Both calculations provide the same accuracy and can be used together with other features like Goal Gems.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">
                Will the interest rate ever change?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  The EXP Bank's interest rate is fixed at 0.15% daily and has remained unchanged since the system was implemented. 
                  There are currently no plans to modify this rate.
                </p>
                <p className="mt-2">
                  This consistent rate is one of the key advantages of the EXP Bank, as it allows for reliable long-term planning and 
                  predictable returns. If there were ever to be a rate change, an announcement would be made well in advance.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">
                Is there a way to calculate multiple deposits or withdrawals?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  Currently, the calculator is designed for single initial deposit scenarios. For multiple deposits or withdrawals, 
                  you can:
                </p>
                <ul className="list-disc mt-2 ml-6">
                  <li>Run separate calculations for each deposit and manually combine the results</li>
                  <li>Use the "Additional Gems" feature to simulate adding more gems at the current time</li>
                  <li>For complex scenarios with multiple transactions, you may want to use a spreadsheet alongside our calculator</li>
                </ul>
                <p className="mt-2">
                  We're considering adding more advanced features for multiple transaction modeling in future updates based on user feedback.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg font-medium">
                How can I provide feedback or report issues with the calculator?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>
                  We welcome your feedback and reports about the calculator! You can:
                </p>
                <ul className="list-disc mt-2 ml-6">
                  <li>Use the contact form in the <a href="/contact" className="text-blue-500 hover:underline">Contact page</a></li>
                  <li>Report technical issues or bugs through our <a href="https://github.com/yourusername/exp-calculator/issues" className="text-blue-500 hover:underline">GitHub issue tracker</a></li>
                  <li>Provide feature suggestions through the same channels</li>
                </ul>
                <p className="mt-2">
                  Your input helps us improve the calculator and add new features that benefit the community. We regularly review 
                  feedback and implement enhancements based on user suggestions.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
} 