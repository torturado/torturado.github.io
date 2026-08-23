---
title: EXP Bank Calculator rank thresholds
description: Read-only Discord rank thresholds used by the EXP Bank Calculator.
canonical: https://torturado.github.io/api/ranks.json.md
last-updated: 2026-08-23
---

# EXP Bank Calculator rank thresholds

The JSON resource at [/api/ranks.json](https://torturado.github.io/api/ranks.json)
lists the Discord rank thresholds used by the calculator.

Each rank includes:

- `name`: the rank name
- `minGems`: the minimum balance as a decimal string
- `displayValue`: a human-readable threshold label

The response also includes the calculator name and its fixed daily interest
rate. This is a static read-only resource with no authentication, query
parameters, or request body. Read [/openapi.json](https://torturado.github.io/openapi.json)
for the machine-readable response schema.
