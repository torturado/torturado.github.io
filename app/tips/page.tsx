import type { Metadata } from "next";
import { createRouteMetadata } from "../routeMetadata";
import { TipsPageContent } from "./TipsPageContent";

export const metadata: Metadata = createRouteMetadata({
	title: "Tips & Strategies | EXP Bank Calculator",
	description:
		"Beginner, intermediate, and advanced strategies for using the EXP Bank calculator and planning gem growth at a 0.50% daily rate.",
	canonicalPath: "/tips",
	markdownPath: "/tips.md",
});

export default function TipsPage() {
	return <TipsPageContent />;
}
