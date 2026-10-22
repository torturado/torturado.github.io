import type { Metadata } from "next";

interface RouteMetadataOptions {
	title: string;
	description: string;
	canonicalPath: string;
	markdownPath: string;
}

export const createRouteMetadata = ({
	title,
	description,
	canonicalPath,
	markdownPath,
}: RouteMetadataOptions): Metadata => ({
	title,
	description,
	alternates: {
		canonical: canonicalPath,
		types: {
			"text/markdown": markdownPath,
		},
	},
	openGraph: {
		title,
		description,
		url: canonicalPath,
		siteName: "EXP Bank Calculator",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/og-image.jpg",
				width: 800,
				height: 800,
				alt: "EXP Bank Calculator",
			},
		],
	},
	twitter: {
		card: "summary",
		title,
		description,
		images: ["/og-image.jpg"],
	},
});
