export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Cookie and Storage Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Our Approach to Privacy</h2>
          <div className="space-y-3">
            <p>We are committed to protecting your privacy. Our website operates without using any cookies from our end, ensuring maximum privacy while still providing essential functionality.</p>
            
            <h3 className="text-xl font-medium">1.1 Local Storage Usage</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>We use local storage only for essential site functionality</li>
              <li>No tracking cookies or third-party cookies are used by us</li>
              <li>All data storage is transparent and user-controlled</li>
            </ul>

            <h3 className="text-xl font-medium">1.2 Third-Party Services</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Our site is hosted on GitHub Pages, which may use essential cookies for security</li>
              <li>Our analytics solution (Umami) is cookie-free</li>
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
            <p>Our site maintains functionality through:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Local browser storage for preferences</li>
              <li>Temporary session data in your browser</li>
              <li>No persistent cookies or tracking mechanisms</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Analytics and Performance</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.1 Privacy-Focused Analytics</h3>
            <p>We use Umami Analytics, a privacy-focused solution that:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Does not use any cookies</li>
              <li>Does not collect personal information</li>
              <li>Respects user privacy by default</li>
              <li>Is fully GDPR compliant</li>
            </ul>

            <h3 className="text-xl font-medium">3.2 Performance Monitoring</h3>
            <p>Our analytics help us:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Understand general usage patterns</li>
              <li>Improve calculator functionality</li>
              <li>Enhance user experience while respecting privacy</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Your Privacy Choices</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.1 Managing Local Storage</h3>
            <p>You have control over your data:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Browser Settings: You can clear local storage through your browser settings</li>
              <li>Private Browsing: Using incognito/private mode prevents persistent storage</li>
              <li>No Opt-Out Needed: We don't use cookies or tracking mechanisms that require opt-out</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Browser Controls</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.1 Managing Local Storage</h3>
            <p>You can manage local storage through your browser settings:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Chrome: Settings → Privacy and Security → Clear browsing data</li>
              <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Manage Website Data</li>
              <li>Edge: Settings → Privacy, search, and services → Clear browsing data</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Updates to This Policy</h2>
          <p>We may update this Storage Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p>If you have any questions about our Storage Policy, please contact us:</p>
          <address className="mt-2 not-italic">
            <a href="mailto:expcalculator.cupped755@passinbox.com" className="text-blue-500 hover:underline">expcalculator.cupped755@passinbox.com</a>
          </address>
        </section>

        <p className="text-sm text-muted-foreground mt-8">Last updated: February 27, 2025</p>
      </div>
    </div>
  )
} 