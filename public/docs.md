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

## Arbitrary calculations

The static JSON resources do not accept query parameters or request bodies. Use the browser WebMCP tool calculate-exp-growth on the homepage for arbitrary calculations. It accepts currentGems and optional goalGems, additionalGems, years, months, days, hours, minutes, and seconds. The list-exp-ranks tool returns the same rank data as the JSON resource.

## Error shape

The OpenAPI contract defines an ErrorResponse object with error.code, error.message, and error.resolution. A request-time server is required before this static deployment can emit JSON errors for invalid requests. The same hosting limit applies to Accept: text/markdown negotiation with Vary: Accept and an MCP Streamable HTTP handshake.

## Links

- JSON API index: https://torturado.github.io/api
- Agent guide: https://torturado.github.io/llms.txt
- Calculator overview: https://torturado.github.io/index.md

