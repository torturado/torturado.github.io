# EXP Bank Calculator

Agent-facing guide for `https://torturado.github.io`.

## Summary

- Static GitHub Pages site for estimating EXP Bank gem growth with compound interest.
- Primary task: calculate future gem balances from a starting deposit at a fixed 0.50% daily rate.
- No server-side API, no login, no OAuth, and no protected resources.

## Main routes

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

## WebMCP tools

- `calculate-exp-growth`
  - Inputs: `currentGems`, optional `goalGems`, optional `additionalGems`, optional duration fields
  - Output: future gems, profit, profit growth percent, time-to-goal, and rank thresholds
- `list-exp-ranks`
  - Output: the Discord rank preset thresholds used by the site

## Constraints

- The site is published on GitHub Pages.
- Response headers and HTTP content negotiation are not configurable from the repository alone.
- That means the site can publish static discovery files, but cannot natively emit custom `Link` headers or serve `Accept: text/markdown` variants from the same URL without adding infrastructure in front of GitHub Pages.
