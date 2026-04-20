# EXP Bank Calculator

Canonical URL: https://torturado.github.io/

Static GitHub Pages calculator for estimating EXP Bank gem growth with compound interest.

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

- Daily rate: `0.50%` compounding.
- Derived hourly rate: `(1 + 0.005)^(1/24) - 1`.
- Time normalization:
  - `1 year = 365 days`
  - `1 month = 30 days`
  - hours, minutes, and seconds are converted into fractional days

## Related docs

- FAQ: https://torturado.github.io/faq.md
- Agent guide: https://torturado.github.io/agents.md
