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
});
