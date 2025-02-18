export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p>We do not collect any personal information from our users. Our calculator operates entirely client-side and does not store or transmit any data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Cookies and Local Storage</h2>
          <p>We use local storage only to save your calculator preferences and theme settings. No tracking cookies are used.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Google AdSense</h2>
          <p>We use Google AdSense to display advertisements. Google AdSense may use cookies to personalize ads. You can learn more about Google's privacy practices at <a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline">Google Privacy Policy</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify users of any material changes by posting the new privacy policy on this page.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </section>
      </div>
    </div>
  )
} 