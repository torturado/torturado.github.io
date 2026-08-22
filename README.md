# EXP Bank Calculator

Static Next.js app exported to GitHub Pages for estimating EXP Bank gem growth.

## Agent discovery

- Canonical machine-readable docs live in public/agents.md and public/llms.txt.
- Route-specific Markdown mirrors live in public/index.md, public/about.md, public/docs.md, public/faq.md, public/tips.md, public/privacy.md, public/terms.md, public/cookies.md, and public/contact.md.
- Read-only JSON resources live at /api/info.json and /api/ranks.json.
- The OpenAPI 3.1 contract lives at /openapi.json.
- The homepage exposes browser-side WebMCP tools for arbitrary calculations.

## GitHub Pages limits

- The static JSON resources do not accept request parameters. Use WebMCP for arbitrary calculations.
- Runtime JSON errors, Accept: text/markdown negotiation with Vary: Accept, and an MCP Streamable HTTP handshake require a server deployment.
- Agents can use the HTML link elements or fetch the published Markdown files directly.

## Local build and tests

    npm install
    npm run build
    npm test

