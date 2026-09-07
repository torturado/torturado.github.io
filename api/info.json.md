---
title: EXP Bank Calculator API info
description: Read-only metadata for the EXP Bank Calculator API.
canonical: https://torturado.github.io/api/info.json.md
last-updated: 2026-08-23
---

# EXP Bank Calculator API info

The JSON resource at [/api/info.json](https://torturado.github.io/api/info.json)
describes the calculator assumptions and supported agent access methods.

## Values

- Daily interest rate: `0.003` (`0.30%`)
- Formula: `FV = PV × (1 + r)^t`
- One year: `365` days
- One month: `30` days
- Arbitrary calculations: browser WebMCP on the homepage

This is a static read-only resource and does not accept query parameters or
request bodies. Use the OpenAPI contract at
[/openapi.json](https://torturado.github.io/openapi.json) for the typed JSON
schema and the [API docs](https://torturado.github.io/docs) for examples.
