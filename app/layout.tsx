import { AnalyticsScript } from "@/components/AnalyticsScript";
import { Footer } from "@/components/Footer";
import { WebMcpTools } from "@/components/WebMcpTools";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const metadataBase = new URL("https://torturado.github.io");

const umamiOrigin = (() => {
	const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL;

	if (!umamiUrl) {
		return "";
	}

	try {
		return new URL(umamiUrl).origin;
	} catch {
		return "";
	}
})();

const cspContent = [
	"default-src 'self'",
	`script-src 'self' 'unsafe-inline'${umamiOrigin ? ` ${umamiOrigin}` : ""}`,
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: https:",
	"font-src 'self' data:",
	`connect-src 'self'${umamiOrigin ? ` ${umamiOrigin}` : ""}`,
	"frame-ancestors 'none'",
	"base-uri 'self'",
	"form-action 'self'",
].join("; ");

export const metadata: Metadata = {
	title: "EXP Bank Calculator | Gem Growth Calculator",
	description:
		"Calculate your EXP Bank earnings with our advanced gem growth calculator. Track real-time earnings, set goals, and predict future gem amounts with compound interest calculations.",
	keywords:
		"EXP Bank, gem calculator, compound interest, gem growth, earnings calculator, real-time calculator",
	authors: [{ name: "EXP Calculator Team" }],
	openGraph: {
		title: "EXP Bank Calculator | Gem Growth Calculator",
		description:
			"Calculate your EXP Bank earnings with our advanced gem growth calculator. Track real-time earnings and predict future gem amounts.",
		type: "website",
		url: metadataBase,
		images: [
			{
				url: "https://torturado.github.io/og-image.jpg",
				width: 800,
				height: 800,
				alt: "EXP Bank Calculator",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
	},
	metadataBase,
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#000000",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="referrer" content="strict-origin-when-cross-origin" />
				<meta
					httpEquiv="Permissions-Policy"
					content="geolocation=(), microphone=(), camera=()"
				/>
				<meta httpEquiv="X-Frame-Options" content="DENY" />
				<meta httpEquiv="X-Content-Type-Options" content="nosniff" />
				<meta name="color-scheme" content="light dark" />
				{process.env.NODE_ENV === "production" && (
					<meta
						httpEquiv="Content-Security-Policy"
						content={cspContent}
					/>
				)}
				{umamiOrigin && (
					<link rel="preconnect" href={umamiOrigin} crossOrigin="" />
				)}
				<link rel="describedby" href="/llms.txt" />
				<link rel="service-doc" href="/agents.md" />
				<AnalyticsScript />
			</head>
			<body className={`${GeistSans.className}`}>
				<a href="#main-content" className="skip-link">
					Skip to main content
				</a>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<WebMcpTools />
					<div className="min-h-screen bg-background flex flex-col transition-colors duration-200">
						<main id="main-content" className="flex-grow">
							{children}
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
