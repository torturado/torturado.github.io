import type { Metadata } from "next";
import { createRouteMetadata } from "../routeMetadata";
import { TipsPageContent } from "./TipsPageContent";

export const metadata: Metadata = createRouteMetadata({
	title: "EXP Bank Gem Growth Tips | Compound Interest & Goals",
	description:
		"Plan EXP Bank gem goals with compound-interest examples, doubling time, and Discord rank milestones at 0.30% daily growth.",
	canonicalPath: "/tips",
	markdownPath: "/tips.md",
});

export default function TipsPage() {
	return <TipsPageContent />;
}
