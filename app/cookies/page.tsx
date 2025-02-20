export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction to Cookies</h2>
          <div className="space-y-3">
            <p>Cookies are small text files that websites place on your device to store information. They serve various purposes and help improve your browsing experience.</p>
            
            <h3 className="text-xl font-medium">1.1 Types of Cookies We Use</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Essential cookies: Required for basic site functionality</li>
              <li>Preference cookies: Remember your settings and choices</li>
              <li>Analytics cookies: Help us understand how visitors use our site</li>
              <li>Advertising cookies: Used by Google AdSense for targeted advertising</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Essential Website Functionality</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">2.1 Local Storage Usage</h3>
            <p>We use browser's local storage for:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Saving calculator preferences</li>
              <li>Remembering your theme settings (light/dark mode)</li>
              <li>Maintaining calculator state during your session</li>
            </ul>

            <h3 className="text-xl font-medium">2.2 Session Management</h3>
            <p>Essential cookies help us:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Keep your calculator session active</li>
              <li>Remember your preferences between page loads</li>
              <li>Ensure proper site functionality</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Analytics and Performance</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.1 Google Analytics</h3>
            <p>We use Google Analytics to understand how visitors interact with our calculator. These cookies collect:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Pages visited and time spent on each page</li>
              <li>Features and functions used most frequently</li>
              <li>General usage patterns and trends</li>
              <li>Anonymous demographic information</li>
            </ul>

            <h3 className="text-xl font-medium">3.2 Performance Monitoring</h3>
            <p>Performance cookies help us:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Identify and fix technical issues</li>
              <li>Optimize calculator performance</li>
              <li>Improve user experience based on usage data</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Advertising Cookies</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.1 Google AdSense</h3>
            <p>Google AdSense uses cookies to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Display relevant advertisements</li>
              <li>Measure ad performance and effectiveness</li>
              <li>Prevent repeated ads</li>
              <li>Remember your ad preferences</li>
            </ul>

            <h3 className="text-xl font-medium">4.2 Third-Party Advertising</h3>
            <p>Advertisers may also set their own cookies to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Measure ad effectiveness</li>
              <li>Provide targeted advertising</li>
              <li>Prevent fraud and improve security</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Managing Your Cookie Preferences</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.1 Browser Settings</h3>
            <p>You can manage cookies through your browser settings:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Chrome: Settings → Privacy and Security → Cookies</li>
              <li>Firefox: Options → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Privacy & Security → Cookies</li>
            </ul>

            <h3 className="text-xl font-medium">5.2 Opt-Out Options</h3>
            <p>You can opt out of:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-500 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              <li>Google AdSense: <a href="https://www.google.com/settings/ads" className="text-blue-500 hover:underline">Google Ads Settings</a></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Impact of Disabling Cookies</h2>
          <div className="space-y-3">
            <p>If you choose to disable cookies:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Essential calculator functions will still work</li>
              <li>Theme preferences won't be saved between visits</li>
              <li>Some features may have limited functionality</li>
              <li>Ads may become less relevant to your interests</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Updates to This Policy</h2>
          <div className="space-y-3">
            <p>We may update this Cookie Policy to reflect:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Changes in how we use cookies</li>
              <li>New features or functionality added to our calculator</li>
              <li>Changes in privacy laws and regulations</li>
              <li>Feedback and questions from users</li>
            </ul>
          </div>
        </section>

        <footer className="mt-8 pt-4 border-t text-sm text-gray-600">
          <p>Last modified: {new Date().toLocaleDateString()}</p>
          <p>Contact: expcalculator.cupped755@passinbox.com</p>
        </footer>
      </div>
    </div>
  )
} 