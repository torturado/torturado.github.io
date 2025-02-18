export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">What Are Cookies</h2>
          <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How We Use Cookies</h2>
          <p>We use cookies and local storage for the following purposes:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>To save your calculator preferences</li>
            <li>To remember your theme settings</li>
            <li>To enable Google AdSense functionality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Google AdSense Cookies</h2>
          <p>We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.</p>
          <p className="mt-2">You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-500 hover:underline">Google Ads Settings</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Managing Cookies</h2>
          <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
          <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>
        </section>
      </div>
    </div>
  )
} 