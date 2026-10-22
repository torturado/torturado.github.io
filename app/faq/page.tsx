import type { Metadata } from "next";
import { createRouteMetadata } from "../routeMetadata";
import { FAQPageContent } from "./FAQPageContent";

export const metadata: Metadata = createRouteMetadata({
	title: "EXP Bank FAQ | Gem Interest, Growth & Goals",
	description:
		"Learn how EXP Bank gem growth works at 0.30% daily interest. Find the compound-interest formula, doubling time, goal instructions, and calculator assumptions.",
	canonicalPath: "/faq",
	markdownPath: "/faq.md",
});

export default function FAQPage() {
	return <FAQPageContent />;
}
