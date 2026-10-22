---
title: EXP Bank FAQ | Gem Interest, Growth & Goals
description: EXP Bank gem growth, compound-interest formula, doubling time, goal instructions, and calculator assumptions.
canonical: https://torturado.github.io/faq
last-updated: 2026-10-22
---

# EXP Bank FAQ

Canonical URL: https://torturado.github.io/faq

## What is EXP Bank?

EXP Bank is the gem-deposit system modeled by this calculator. The tool estimates how a starting gem balance grows at a fixed 0.30% daily compound interest rate, time to a target balance, and Discord rank milestones.

## How is EXP Bank gem interest calculated?

The formula is `FV = PV × (1 + r)^t`, where FV is your future balance, PV is your current gems, r is `0.003` (0.30% daily), and t is the duration in days. Interest compounds on the balance including previously earned interest.

For example, 1,000 gems become approximately 1,094.03 gems after 30 days, a profit of 94.03 gems. More examples: https://torturado.github.io/#growth-examples

## How long does it take to double your gems?

At 0.30% daily compound interest, doubling takes about 231.4 days: `t = ln(2) / ln(1.003)`. A balance of 1,000 gems reaches 2,000 gems after that time in the calculator's model. Counting only complete days, the balance first exceeds double after 232 days.

## How do I use Goal Gems and Additional Gems?

1. Enter your starting balance in `Current Gems`.
2. Use `Goal Gems` for the total balance you want to reach, or `Additional Gems` for the extra amount you want to earn.
3. Select `Calculate` to see the estimated time to each target.

With 1,000 current gems, Goal Gems of 2,000 and Additional Gems of 1,000 describe the same target. Additional Gems is a profit goal, not a new deposit. Rank presets let you select a Discord milestone as your goal.

## What is the difference between a time period and a target date?

A time period specifies a duration in years, months, days, hours, minutes, or seconds. One year is 365 days and one month is 30 days. A Target Date and optional Target Time use the interval from now to that calendar date instead.

Shorter periods use an equivalent hourly rate: `(1.003)^(1/24) − 1`.

## How accurate is the EXP calculator?

The calculator uses high-precision arithmetic for large balances. Displayed values are rounded, and results depend on the fixed rate and chosen duration. They are estimates; the EXP Bank service may apply different rounding or crediting rules.

Calculation model: https://torturado.github.io/about

## Can I calculate multiple deposits or withdrawals?

Each calculation models one starting balance without later transactions. Calculate growth up to a transaction, adjust the resulting balance, and use it as Current Gems for the next period. Repeat for each transaction.

## Are there deposit limits, withdrawal fees, or rate changes?

The calculator accepts a positive starting balance and uses a fixed 0.30% daily rate. It does not check account eligibility, deposit limits, withdrawal fees, or changes to the bank's rules. Check these directly with the EXP Bank service.

## How can I report a calculator issue?

Include your inputs, the result you received, and the result you expected.

- Contact: https://torturado.github.io/contact
- GitHub issues: https://github.com/torturado/torturado.github.io/issues

## Related resources

- Calculator: https://torturado.github.io/#calculator
- Growth examples: https://torturado.github.io/#growth-examples
- Gem growth tips: https://torturado.github.io/tips
