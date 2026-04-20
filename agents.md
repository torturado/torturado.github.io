# EXP Bank Calculator

Agent-facing guide for `https://torturado.github.io`.

## Summary

- Static GitHub Pages site for estimating EXP Bank gem growth with compound interest.
- Primary task: calculate future gem balances from a starting deposit at a fixed 0.50% daily rate.
- No HTTP API.
- No OAuth or OIDC authorization server.
- No OAuth protected-resource metadata.
- No MCP server.
- Browser-side WebMCP tools are exposed on the homepage.

## Canonical machine docs

- `/agents.md`
- `/llms.txt`
- `/index.md`
- `/faq.md`
- `/tips.md`
- `/privacy.md`
- `/terms.md`
- `/cookies.md`
- `/contact.md`

## Main HTML routes

- `/` calculator UI and WebMCP tool surface
- `/faq` product and formula explanations
- `/tips` usage tips
- `/privacy`, `/terms`, `/cookies`, `/contact` informational pages

## Calculator assumptions

- Daily interest rate: `0.50%` (`0.005`)
- Hourly rate is derived from the daily rate using compound growth.
- Time inputs are normalized as:
  - `1 year = 365 days`
  - `1 month = 30 days`
  - hours, minutes, and seconds are converted into fractional days

## What an agent can do

- Read static documentation directly from the site.
- Use WebMCP on the homepage when the browser supports `navigator.modelContext`.
- Use the calculator UI manually if WebMCP is unavailable.
- Fetch the published `.md` files directly for route-specific summaries.

## WebMCP tools

- `calculate-exp-growth`
  - Inputs: `currentGems`, optional `goalGems`, optional `additionalGems`, optional duration fields
  - Output: future gems, profit, profit growth percent, time-to-goal, and rank thresholds
- `list-exp-ranks`
  - Output: the Discord rank preset thresholds used by the site

## Not published on this site

- `/.well-known/api-catalog`
- `/.well-known/api-catalog.json`
- `/.well-known/openid-configuration`
- `/.well-known/oauth-authorization-server`
- `/.well-known/oauth-protected-resource`
- `/.well-known/mcp/server-card.json`

## GitHub Pages limitations

- HTTP `Link` response headers are not configurable in this deployment.
- `Accept: text/markdown` negotiation is not supported for `/`.
- Agents should use the HTML `<link>` elements or fetch the published `.md` files directly.
