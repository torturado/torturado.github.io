# EXP Calculator agent instructions

## When to use this repository

Use this repository when changing the EXP Bank Calculator, its calculation
logic, its browser WebMCP tools, or its public agent-facing documentation.

## Public machine resources

- `/public/llms.txt` is the site-wide agent index.
- `/public/agents.md` is the full agent guide.
- `/public/openapi.json` is the typed API contract.
- `/public/api/` contains static JSON resources and Markdown mirrors.

## Verification

Run `npm test` after changes. It builds the static export and checks the
homepage, recovery page, JSON resources, OpenAPI contract, discovery files,
and trust/documentation routes.

The deployed site is a static GitHub Pages export. Do not describe it as a
request-time API, authenticated service, or live MCP transport unless the
deployment architecture has first changed to support those capabilities.
