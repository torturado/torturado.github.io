# About EXP Bank Calculator

Canonical URL: https://torturado.github.io/about

EXP Bank Calculator is a browser-based tool for estimating how an EXP Bank gem balance changes at a fixed 0.50% daily compound rate. It accepts a starting balance, a duration, a future date, a goal balance, or an additional amount to earn. Results include future gems, profit, growth percentage, income estimates, and the Discord rank threshold reached by the projected balance.

## Calculation model

The model uses FV = PV x (1 + r)^t. PV is the starting balance, r is the daily rate 0.005, and t is the normalized duration in days. One year is 365 days and one month is 30 days. Hour, minute, and second fields become fractional days, and the calculator derives an equivalent hourly rate for short periods.

## Browser-first design

Math runs locally in the browser without an account or a request-time application server. Agents can use the browser WebMCP tools on the homepage, read the formula in index.md, or fetch the read-only JSON resources described in the API docs.

## Public resources

- API docs: https://torturado.github.io/docs
- OpenAPI: https://torturado.github.io/openapi.json
- Agent guide: https://torturado.github.io/llms.txt
- Contact: https://torturado.github.io/contact

