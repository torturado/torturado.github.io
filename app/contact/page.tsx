export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
          <p className="mb-4">Have questions, suggestions, or found a bug? We'd love to hear from you! You can reach us through any of these channels:</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-card rounded-lg border">
              <h3 className="text-xl font-medium mb-2">Discord</h3>
              <p className="text-muted-foreground">@oyfg</p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <h3 className="text-xl font-medium mb-2">GitHub</h3>
              <p className="text-muted-foreground">@torturado</p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <p className="text-muted-foreground">expcalculator.cupped755@passinbox.com</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Response Time</h2>
          <p>We typically respond within 24-48 hours. For urgent matters, Discord is usually the fastest way to reach us.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Bug Reports</h2>
          <p>When reporting bugs, please include:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>A clear description of the issue</li>
            <li>Steps to reproduce the problem</li>
            <li>Your browser and device information</li>
            <li>Screenshots if applicable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Feature Requests</h2>
          <p>We're always looking to improve! When suggesting new features:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Describe the feature in detail</li>
            <li>Explain how it would be useful</li>
            <li>Provide examples if possible</li>
          </ul>
        </section>
      </div>
    </div>
  )
} 