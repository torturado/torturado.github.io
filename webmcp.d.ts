import "react";

declare module "react" {
	interface HTMLAttributes<T> {
		toolname?: string;
		tooldescription?: string;
		toolautosubmit?: boolean | "";
		toolparamdescription?: string;
		toolparamtitle?: string;
	}
}
