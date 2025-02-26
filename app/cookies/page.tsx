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
          <h2 className="text-2xl font-semibold mb-3">4. Your Cookie Choices</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.1 Managing Cookies</h3>
            <p>You have control over cookies on your device:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Browser Settings: Most browsers allow you to control cookies through their settings</li>
              <li>Delete Cookies: You can delete existing cookies at any time</li>
              <li>Block Cookies: You can set your browser to block cookies altogether</li>
              <li>Private Browsing: Using incognito/private browsing mode may limit cookie storage</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. How to Control Cookies</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.1 Browser Controls</h3>
            <p>You can manage cookies through your browser settings. Here's how to access cookie controls in popular browsers:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
              <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Cookies and website data</li>
              <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <h3 className="text-xl font-medium">5.2 Opt-Out Options</h3>
            <p>For specific services, you can use these opt-out tools:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-500 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Updates to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p>If you have any questions about our Cookie Policy, please contact us:</p>
          <address className="mt-2 not-italic">
            <a href="mailto:expcalculator.cupped755@passinbox.com" className="text-blue-500 hover:underline">expcalculator.cupped755@passinbox.com</a>
          </address>
        </section>

        <p className="text-sm text-muted-foreground mt-8">Last updated: February 26, 2025</p>
      </div>
    </div>
  )
} 