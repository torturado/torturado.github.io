---
title: EXP Bank Calculator authentication
description: Authentication and access policy for the public EXP Bank Calculator resources.
canonical: https://torturado.github.io/auth.md
last-updated: 2026-08-23
---

# EXP Bank Calculator authentication

The public EXP Bank Calculator resources require no API key, account, OAuth
token, or other credential. The JSON resources are read-only static files
served by GitHub Pages.

## Public access

- `GET /api/info.json` returns calculator assumptions.
- `GET /api/ranks.json` returns Discord rank thresholds.
- `GET /openapi.json` returns the typed API contract.
- Browser WebMCP tools on the homepage perform arbitrary calculations when
  the browser supports `navigator.modelContext`.

There are currently no write operations, user accounts, private resources,
OAuth authorization server, rate-limit headers, or bearer-token endpoints.
Because the site is a static export, it cannot issue request-time JSON errors,
negotiate Markdown by `Accept`, or provide an authenticated MCP transport.
