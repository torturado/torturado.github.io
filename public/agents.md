# EXP Bank Calculator

Agent-facing guide for https://torturado.github.io.

## Summary

- Static GitHub Pages site for estimating EXP Bank gem growth with compound interest.
- Primary task: calculate future gem balances from a starting deposit at a fixed 0.50% daily rate.
- Read-only JSON resources are published at /api/info.json and /api/ranks.json.
- The typed OpenAPI contract is published at /openapi.json.
- No OAuth or OIDC authorization server.
- No OAuth protected-resource metadata.
- Browser-side WebMCP tools are exposed on the homepage.

## Canonical machine docs

- /agents.md
- /llms.txt
- /index.md
- /about
- /about.md
- /docs
- /docs.md
- /openapi.json
- /api
- /api/info.json
- /api/ranks.json
- /faq.md
- /tips.md
- /privacy.md
- /terms.md
- /cookies.md
- /contact.md

## Main HTML routes

- /: calculator UI and WebMCP tool surface
- /about: product scope and calculation model
- /docs: API docs, OpenAPI link, JSON endpoint examples, and hosting limits
- /api: public JSON resource index
- /faq: product and formula explanations
- /tips: usage tips
- /privacy, /terms, /cookies, /contact: informational pages

## Calculator assumptions

- Daily interest rate: 0.50% (0.005)
- Hourly rate is derived from the daily rate using compound growth.
- Time inputs are normalized as:
  - 1 year = 365 days
  - 1 month = 30 days
  - hours, minutes, and seconds are converted into fractional days

## What an agent can do

- Read static documentation directly from the site.
- Fetch /api/info.json for calculator assumptions and /api/ranks.json for rank thresholds.
- Read /openapi.json for typed endpoint and error schemas.
- Use WebMCP on the homepage when the browser supports navigator.modelContext.
- Use the calculator UI manually if WebMCP is unavailable.
- Fetch the published .md files directly for route-specific summaries.

## When to use this calculator

Reach for EXP Bank Calculator when the task is to project a gem balance, estimate time to a target, compare a duration, or map a balance to a Discord rank threshold. For an agent with browser WebMCP support, call calculate-exp-growth with currentGems and the relevant optional goal or duration fields. For a static client, read /index.md and apply the documented formula.

## WebMCP tools

- calculate-exp-growth
  - Inputs: currentGems, optional goalGems, optional additionalGems, optional duration fields
  - Output: future gems, profit, profit growth percent, time-to-goal, and rank thresholds
- list-exp-ranks
  - Output: the Discord rank preset thresholds used by the site

## WebMCP and HTTP limits

- The JSON resources are static and do not accept query or body parameters.
- Arbitrary calculations are available through browser WebMCP, not HTTP.
- A request-time deployment is required for JSON error responses, Markdown content negotiation with Vary: Accept, and an MCP Streamable HTTP handshake.
- OAuth and OIDC metadata are not published because the public calculator has no authenticated account flow.
