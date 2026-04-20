# EXP Bank Calculator

Static Next.js app exported to GitHub Pages for estimating EXP Bank gem growth.

## Agent discovery

- Canonical machine-readable docs live in `public/agents.md` and `public/llms.txt`.
- Route-specific markdown mirrors live in `public/index.md`, `public/faq.md`, `public/tips.md`, `public/privacy.md`, `public/terms.md`, `public/cookies.md`, and `public/contact.md`.
- The homepage exposes browser-side WebMCP tools, but this repository does not publish an HTTP API, OAuth/OIDC metadata, protected-resource metadata, or an MCP server.

## GitHub Pages limitations

- HTTP `Link` response headers are not configurable in this deployment.
- `Accept: text/markdown` negotiation is not supported for `/`.
- Agents should use the HTML `<link>` elements or fetch the published `.md` files directly.

## Local build

```bash
npm install
npm run build
```

