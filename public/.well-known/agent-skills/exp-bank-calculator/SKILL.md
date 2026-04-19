---
name: exp-bank-calculator
description: Use this skill when you need to estimate EXP Bank gem growth, time-to-goal, or rank thresholds on torturado.github.io.
---

# EXP Bank Calculator

Use this skill for the static calculator at `https://torturado.github.io`.

## When to use

- A user asks how many gems a deposit will grow into over time.
- A user asks how long it will take to reach a target amount.
- A user asks which Discord rank threshold a gem amount maps to.

## Inputs

- `currentGems`: required starting balance
- `goalGems`: optional total balance target
- `additionalGems`: optional extra gems to earn beyond the current balance
- Duration inputs: `years`, `months`, `days`, `hours`, `minutes`, `seconds`

## Notes

- The calculator assumes a fixed daily interest rate of `0.50%`.
- There is no server API. Prefer the homepage WebMCP tools when available.
- If WebMCP is unavailable, use the site UI or the formula documentation in `/faq` and `/agents.md`.
