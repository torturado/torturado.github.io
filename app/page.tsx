import Calculator from "../components/Calculator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen p-4 space-y-8 max-w-6xl mx-auto">
      {/* Introduction Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">EXP Bank Calculator</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Calculate your EXP Bank earnings and plan your gem growth efficiently. Our advanced calculator helps you track and predict your gem accumulation over time.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Real-time Calculations</CardTitle>
            <CardDescription>Watch your gems grow in real-time with our live calculator</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our calculator updates continuously, showing you exactly how your gems accumulate second by second.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Future Predictions</CardTitle>
            <CardDescription>Plan ahead with accurate growth projections</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Set target dates and amounts to see when you'll reach your goals and plan your strategy accordingly.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detailed Statistics</CardTitle>
            <CardDescription>Comprehensive growth analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>View detailed breakdowns of your gem growth per second, minute, hour, day, week, and month.</p>
          </CardContent>
        </Card>
      </section>

      {/* Calculator Section */}
      <section className="mb-8">
        <Calculator />
      </section>

      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
        <div className="space-y-4">
          <p>The EXP Bank Calculator uses compound interest principles to accurately predict your gem growth. Here's how to use it:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Enter your current number of gems</li>
            <li>Set your target goals (optional)</li>
            <li>Add any additional gems you expect to receive (optional)</li>
            <li>View real-time calculations and predictions</li>
          </ol>
          <p className="mt-4">
            The calculator takes into account the standard 0.15% daily interest rate and compounds it continuously to give you the most accurate predictions possible.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Tips for Maximizing Growth</h2>
        <div className="space-y-4">
          <p>To get the most out of your EXP Bank:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep your gems in the bank as long as possible to maximize compound interest</li>
            <li>Use the calculator to set realistic goals and track your progress</li>
            <li>Check back regularly to monitor your growth and adjust your strategy</li>
            <li>Consider adding more gems when possible to accelerate your growth</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

