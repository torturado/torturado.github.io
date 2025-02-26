import Link from 'next/link'
import { Mail, Github, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-8 mt-12 border-t bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About EXP Calculator</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A powerful tool designed to help you calculate and track your EXP Bank earnings, providing accurate forecasts and growth metrics.
            </p>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="mailto:contact@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                Home
              </Link>
              <Link href="#calculator" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                Calculator
              </Link>
              <Link href="#faq" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                FAQ
              </Link>
              <Link href="#tips" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                Tips & Strategies
              </Link>
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center">
                Privacy Policy
                <ExternalLink size={12} className="ml-1" />
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center">
                Terms of Service
                <ExternalLink size={12} className="ml-1" />
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center">
                Cookie Policy
                <ExternalLink size={12} className="ml-1" />
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center">
                Contact
                <ExternalLink size={12} className="ml-1" />
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} EXP Calculator. All rights reserved.</p>
          <p className="mt-2">
            This is a fan-made tool and is not affiliated with any official game publisher.
          </p>
        </div>
      </div>
    </footer>
  )
} 