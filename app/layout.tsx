import "./globals.css"
import { Inter, Poppins, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

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
  title: "EXP Bank Calculator",
  description: "Calculate your EXP Bank earnings",
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
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7064814834765701"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background transition-colors duration-300">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

