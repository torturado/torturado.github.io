import "./globals.css"
import { Inter, Poppins, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"

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
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <link rel="canonical" href="https://exp-calculator.vercel.app" />
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7064814834765701"
          crossOrigin="anonymous"
        />
        {/* Google Analytics */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-Y8LMTRNGRJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y8LMTRNGRJ');
            `
          }}
        />
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

