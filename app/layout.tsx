import "./globals.css"
import { Inter, Poppins, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
})
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space"
})

export const metadata = {
  title: "EXP Bank Calculator | Gem Growth Calculator",
  description: "Calculate your EXP Bank earnings with our advanced gem growth calculator. Track real-time earnings, set goals, and predict future gem amounts with compound interest calculations.",
  keywords: "EXP Bank, gem calculator, compound interest, gem growth, earnings calculator, real-time calculator",
  authors: [{ name: "EXP Calculator Team" }],
  openGraph: {
    title: "EXP Bank Calculator | Gem Growth Calculator",
    description: "Calculate your EXP Bank earnings with our advanced gem growth calculator. Track real-time earnings and predict future gem amounts.",
    type: "website",
    images: [
      {
        url: 'https://torturado.github.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EXP Bank Calculator',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://torturado.github.io'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://torturado.github.io" />
        
        {/* Google Analytics (GA4) */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-Y8LMTRNGRJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Enhanced analytics configuration with privacy features
            gtag('config', 'G-Y8LMTRNGRJ', {
              'send_page_view': true,
              'anonymize_ip': true,
              'cookie_flags': 'samesite=none;secure',
              'page_title': document.title,
              'page_location': window.location.href,
              'user_properties': {
                'theme': localStorage.getItem('theme') || 'system'
              }
            });
            
            // Custom event tracking helper
            window.trackEvent = function(category, action, label, value) {
              gtag('event', action, {
                'event_category': category,
                'event_label': label,
                'value': value
              });
            }
            
            // Track important user interactions
            document.addEventListener('DOMContentLoaded', function() {
              // Track calculator usage
              const calculateButton = document.querySelector('button:contains("Calculate")');
              if (calculateButton) {
                calculateButton.addEventListener('click', function() {
                  window.trackEvent('Calculator', 'Calculate', 'User clicked calculate button');
                });
              }
            });
          `}
        </Script>
        
        {/* Cookie Consent Banner Script */}
        <Script id="cookie-consent" strategy="afterInteractive">
          {`
            function showCookieConsent() {
              if (!localStorage.getItem('cookieConsent')) {
                const banner = document.createElement('div');
                banner.id = 'cookie-banner';
                banner.style.position = 'fixed';
                banner.style.bottom = '0';
                banner.style.left = '0';
                banner.style.right = '0';
                banner.style.padding = '1rem';
                banner.style.background = '#f9fafb';
                banner.style.boxShadow = '0 -4px 6px -1px rgba(0, 0, 0, 0.1)';
                banner.style.zIndex = '50';
                banner.style.display = 'flex';
                banner.style.justifyContent = 'space-between';
                banner.style.alignItems = 'center';
                
                banner.innerHTML = \`
                  <div>
                    <p style="margin: 0; font-size: 0.875rem;">
                      We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                      <a href="/cookies" style="color: #3b82f6; text-decoration: underline;">Learn more</a>
                    </p>
                  </div>
                  <div style="display: flex; gap: 0.5rem;">
                    <button id="accept-cookies" style="background: #3b82f6; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem; border: none; cursor: pointer;">Accept</button>
                    <button id="reject-cookies" style="background: transparent; border: 1px solid #d1d5db; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;">Reject</button>
                  </div>
                \`;
                
                document.body.appendChild(banner);
                
                document.getElementById('accept-cookies').addEventListener('click', function() {
                  localStorage.setItem('cookieConsent', 'accepted');
                  banner.remove();
                  gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                    'ad_storage': 'granted'
                  });
                });
                
                document.getElementById('reject-cookies').addEventListener('click', function() {
                  localStorage.setItem('cookieConsent', 'rejected');
                  banner.remove();
                  gtag('consent', 'update', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied'
                  });
                });
              }
            }
            
            // Show cookie consent banner after page loads
            window.addEventListener('load', showCookieConsent);
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

