import { AnalyticsScript } from "@/components/AnalyticsScript";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
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
	metadataBase: new URL("https://torturado.github.io"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#000000" />
				<link rel="canonical" href="https://torturado.github.io" />
				<AnalyticsScript />
			</head>
			<body className={`${GeistSans.className}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<div className="min-h-screen bg-background flex flex-col transition-colors duration-200">
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
