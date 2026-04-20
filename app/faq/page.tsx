import type { Metadata } from "next";
import { createRouteMetadata } from "../routeMetadata";
import { FAQPageContent } from "./FAQPageContent";

export const metadata: Metadata = createRouteMetadata({
	title: "FAQ | EXP Bank Calculator",
	description:
		"Frequently asked questions about the EXP Bank calculator, compound-interest formula, withdrawals, goals, and deposits.",
	canonicalPath: "/faq",
	markdownPath: "/faq.md",
});

export default function FAQPage() {
	return <FAQPageContent />;
}
