---
title: EXP Bank Calculator API docs
description: Public JSON endpoints, OpenAPI schemas, and WebMCP integration guidance.
canonical: https://torturado.github.io/docs.md
last-updated: 2026-08-23
---

# API docs | EXP Bank Calculator

Canonical URL: https://torturado.github.io/docs

EXP Bank Calculator publishes two read-only JSON resources without authentication. The OpenAPI 3.1 contract is available at https://torturado.github.io/openapi.json.

## Endpoints

### GET /api/info.json

Returns the product name, daily rate, formula, time normalization, supported agent access methods, and links to the public documentation.

Example:

    curl https://torturado.github.io/api/info.json

### GET /api/ranks.json

Returns the Discord rank names, minimum gem balances, display labels, and daily interest rate used by the calculator.

Example:

    curl https://torturado.github.io/api/ranks.json

## Authentication and access

The public JSON resources require no API key, account, OAuth token, or bearer
credential. They are read-only GET resources served as static files. Read
[auth.md](https://torturado.github.io/auth.md) for the complete access policy
and the limits of the GitHub Pages deployment.

## Arbitrary calculations

The static JSON resources do not accept query parameters or request bodies. Use the browser WebMCP tool calculate-exp-growth on the homepage for arbitrary calculations. It accepts currentGems and optional goalGems, additionalGems, years, months, days, hours, minutes, and seconds. The list-exp-ranks tool returns the same rank data as the JSON resource.

## Error shape

The OpenAPI contract defines an ErrorResponse object with error.code, error.message, and error.resolution. A request-time server is required before this static deployment can emit JSON errors for invalid requests. The same hosting limit applies to Accept: text/markdown negotiation with Vary: Accept and an MCP Streamable HTTP handshake.

Successful responses use the CalculatorInfo and RankList schemas in the
OpenAPI document. ErrorResponse is the structured error object for a future
request-time deployment.

## Links

- JSON API index: https://torturado.github.io/api
- Agent guide: https://torturado.github.io/llms.txt
- Calculator overview: https://torturado.github.io/index.md
- Authentication: https://torturado.github.io/auth.md
- API section guide: https://torturado.github.io/api/llms.txt
