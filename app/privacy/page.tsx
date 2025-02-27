export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p>Our EXP Bank Calculator is designed with your privacy in mind. We operate with complete transparency about data collection:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Calculator Data: All calculations are performed entirely in your browser. No calculation data is ever sent to our servers.</li>
            <li>Local Storage: We only store your preferences (like theme settings) locally on your device.</li>
            <li>No Personal Information: We do not collect, store, or process any personal information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>Since we don't collect personal information, our use of data is minimal:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Calculator Functions: All calculations are performed instantly and locally</li>
            <li>Theme Preferences: Stored locally to remember your preferred display settings</li>
            <li>Analytics: We use Umami Analytics, a privacy-focused analytics tool that doesn't use cookies or collect personal information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Cookies and Local Storage</h2>
          <p>We use minimal storage technologies:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Essential Local Storage: Used only for saving calculator preferences and theme settings</li>
            <li>No Cookies: Our analytics solution (Umami) is cookie-free and respects your privacy</li>
          </ul>
          <p className="mt-2">You can manage local storage through your browser settings.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.1 Hosting</h3>
            <p>Our website is hosted on GitHub Pages, a static site hosting service provided by GitHub Inc. GitHub Pages may collect some basic information like IP addresses for security and diagnostic purposes according to their privacy policy.</p>

            <h3 className="text-xl font-medium">4.2 Analytics</h3>
            <p>We use Umami Analytics, a privacy-focused solution that:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Collects anonymous usage data without cookies</li>
              <li>Does not track personal information</li>
              <li>Respects user privacy by default</li>
              <li>Is fully compliant with GDPR and other privacy regulations</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p>Your data security is paramount:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>All calculator processing occurs locally in your browser</li>
            <li>The website is served securely via GitHub Pages using HTTPS</li>
            <li>Analytics data is collected anonymously on our Umami server</li>
            <li>No personal data is collected or stored</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Your Choices</h2>
          <p>You maintain control of your privacy:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Browser Settings: You can clear local storage at any time</li>
            <li>Do Not Track: We respect browser Do Not Track signals</li>
            <li>Analytics: Our analytics solution is privacy-focused by default and doesn't require opt-out</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Changes to This Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <address className="mt-2 not-italic">
            <a href="mailto:expcalculator.cupped755@passinbox.com" className="text-blue-500 hover:underline">expcalculator.cupped755@passinbox.com</a>
          </address>
        </section>

        <p className="text-sm text-muted-foreground mt-8">Last updated: February 27, 2025</p>
      </div>
    </div>
  )
} 