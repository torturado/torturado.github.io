export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using the EXP Bank Calculator website ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.</p>
          <div className="mt-3 space-y-2">
            <h3 className="text-xl font-medium">1.1 Applicable Laws</h3>
            <p>You are responsible for compliance with all applicable local laws when using our Service.</p>
            <h3 className="text-xl font-medium">1.2 Changes to Terms</h3>
            <p>We reserve the right to modify these terms at any time. We will notify users of any material changes through our website.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Use License and Restrictions</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">2.1 License Grant</h3>
            <p>We grant you a free, non-exclusive license to use the calculator for both personal and commercial purposes.</p>
            
            <h3 className="text-xl font-medium">2.2 Restrictions</h3>
            <p>You agree not to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Modify, reverse engineer, or attempt to bypass any security features</li>
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with other users' access to the Service</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Calculator Functionality</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.1 Accuracy of Calculations</h3>
            <p>While we strive for accuracy, all calculations are provided "as is". The calculator:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Uses standard compound interest formulas</li>
              <li>Updates in real-time based on user input</li>
              <li>May be subject to rounding differences</li>
            </ul>

            <h3 className="text-xl font-medium">3.2 No Financial Advice</h3>
            <p>The calculator is a tool for estimation purposes only. It does not constitute financial advice or recommendations.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Advertising and Third-Party Services</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.1 Google AdSense</h3>
            <p>Our website displays advertisements through Google AdSense. By using the Service, you agree:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>To view advertisements as part of the Service</li>
              <li>That ad content is controlled by Google, not us</li>
              <li>To Google's advertising policies and terms</li>
            </ul>

            <h3 className="text-xl font-medium">4.2 Third-Party Links</h3>
            <p>Our Service may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Disclaimer of Warranties</h2>
          <div className="space-y-3">
            <p>The Service is provided "as is" without warranties of any kind, either express or implied, including but not limited to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Accuracy of calculations or results</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
          <div className="space-y-3">
            <p>We shall not be liable for any damages arising from:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Use or inability to use the Service</li>
              <li>Errors in calculations or results</li>
              <li>Loss of data or profits</li>
              <li>Service interruptions or technical issues</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Intellectual Property</h2>
          <div className="space-y-3">
            <p>All content and functionality of the Service, including but not limited to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Calculator algorithms and formulas</li>
              <li>User interface design</li>
              <li>Graphics and text content</li>
              <li>Source code and documentation</li>
            </ul>
            <p>Are the exclusive property of EXP Calculator and are protected by applicable intellectual property laws.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Termination</h2>
          <div className="space-y-3">
            <p>We reserve the right to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Terminate or suspend access to our Service immediately, without prior notice</li>
              <li>Remove or disable access to content at our sole discretion</li>
              <li>Block access from certain IP addresses or regions</li>
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