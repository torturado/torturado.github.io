---
title: EXP Bank Calculator | Gem Growth & Interest
description: Free EXP Bank calculator for gem growth at 0.30% daily compound interest, future balances, profit, and gem goals.
canonical: https://torturado.github.io/
last-updated: 2026-10-22
---

# EXP Bank Calculator

Canonical URL: https://torturado.github.io/

Free EXP calculator for estimating EXP Bank gem growth at 0.30% daily compound interest. Calculate future gems, profit, time to a gem goal, and Discord rank milestones. No account is required; calculations run in your browser.

## Purpose

- Estimate future gem totals from a starting balance.
- Track profit over a chosen duration or target date.
- Estimate how long it takes to reach a goal balance or earn an additional amount.
- Surface Discord rank thresholds and browser-side WebMCP tools on the homepage.

## Calculator inputs

- `Current Gems` required starting balance.
- `Goal Gems` optional target total balance.
- `Additional Gems` optional extra amount to earn beyond the current balance.
- Duration fields: `years`, `months`, `days`, `hours`, `minutes`, `seconds`.
- Target-date flow: `Target Date` and optional `Target Time`.

## Calculator outputs

- Future gems for the selected duration or target date.
- Profit and profit growth percent.
- Profit-per-hour and profit-per-day summaries.
- Time to reach `Goal Gems` or `Additional Gems`.
- Current and projected Discord rank thresholds.

## Calculation assumptions

- Daily rate: `0.30%` compounding.
- Derived hourly rate: `(1 + 0.003)^(1/24) - 1`.
- Time normalization:
  - `1 year = 365 days`
  - `1 month = 30 days`
  - hours, minutes, and seconds are converted into fractional days

## How to use the EXP calculator

1. Enter your balance in `Current Gems`.
2. Choose a duration or enter a `Target Date` and optional `Target Time`.
3. Optionally enter `Goal Gems` for a total balance or `Additional Gems` for extra gems you want to earn.
4. Select `Calculate` to see your projected balance, profit, growth percentage, and time to goal.

With 1,000 current gems, `Goal Gems = 2000` and `Additional Gems = 1000` describe the same target. Additional Gems is a profit target, not a new deposit.

## EXP Bank gem growth examples

Starting with 1,000 gems at 0.30% daily compound interest, without later deposits or withdrawals:

| Duration | Balance | Profit |
| --- | ---: | ---: |
| 1 day | 1,003.00 | 3.00 |
| 7 days | 1,021.19 | 21.19 |
| 30 days | 1,094.03 | 94.03 |
| 180 days | 1,714.62 | 714.62 |
| 365 days | 2,984.29 | 1,984.29 |

Values are rounded to two decimal places. The formula is `FV = PV × (1 + r)^t`, with a daily rate of `r = 0.003` and duration `t` in days. Profit is `FV − PV`. These are estimates using a fixed rate.

## Discord rank goals

Use Goal Gems rank presets to estimate the time to a milestone:

- Ethereal: 160M+ gems
- Luminary: 800M+ gems
- Radiant: 1.6B+ gems
- Catalyst: 4B+ gems
- Divine: 12B+ gems
- Cosmic: 48B+ gems

## Related docs

- FAQ: https://torturado.github.io/faq.md
- Agent guide: https://torturado.github.io/agents.md
- About: https://torturado.github.io/about.md
- API docs: https://torturado.github.io/docs.md
- OpenAPI: https://torturado.github.io/openapi.json
- Calculator info JSON: https://torturado.github.io/api/info.json
- Rank thresholds JSON: https://torturado.github.io/api/ranks.json
- Authentication: https://torturado.github.io/auth.md

## Agent access

- Use the browser WebMCP tool calculate-exp-growth for arbitrary calculations when navigator.modelContext is available.
- Use list-exp-ranks for the rank threshold list.
- The JSON endpoints are static resources and do not accept request parameters.
