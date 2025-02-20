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
            <li>Analytics: We use Google Analytics to understand general usage patterns (opt-out available)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Cookies and Local Storage</h2>
          <p>We use minimal storage technologies:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Essential Local Storage: Used only for saving calculator preferences and theme settings</li>
            <li>Google AdSense: May use cookies for personalized advertising</li>
            <li>Google Analytics: Uses cookies to analyze site usage patterns</li>
          </ul>
          <p className="mt-2">You can manage cookie preferences through your browser settings.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">Google AdSense</h3>
            <p>We use Google AdSense to display advertisements. This service may:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Use cookies for ad personalization</li>
              <li>Collect user data for targeting</li>
              <li>Follow Google's privacy practices (<a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>)</li>
            </ul>

            <h3 className="text-xl font-medium mt-4">Google Analytics</h3>
            <p>We use Google Analytics to understand usage patterns. This service:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Collects anonymous usage data</li>
              <li>Uses cookies to track sessions</li>
              <li>Does not identify individual users</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p>We take several measures to ensure data security:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>All calculations are performed locally in your browser</li>
            <li>No sensitive data is ever transmitted to our servers</li>
            <li>We use HTTPS encryption for all web traffic</li>
            <li>Regular security audits and updates are performed</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Opt-out of cookies through your browser settings</li>
            <li>Disable Google Analytics tracking</li>
            <li>Clear your local storage data at any time</li>
            <li>Request information about your data (though we don't collect any)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify users of any material changes by:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Posting the new policy on this page</li>
            <li>Updating the "last modified" date at the bottom of this page</li>
            <li>Providing a notification on our homepage when appropriate</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Contact Information</h2>
          <p>If you have any questions about this Privacy Policy, you can contact us:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>By email: expcalculator.cupped755@passinbox.com</li>
            <li>Through our GitHub repository</li>
            <li>By creating an issue in our public tracker</li>
          </ul>
        </section>

        <footer className="mt-8 pt-4 border-t text-sm text-gray-600">
          <p>Last modified: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  )
} 