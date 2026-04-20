# Frequently Asked Questions

Canonical URL: https://torturado.github.io/faq

## What is the EXP Bank?

The EXP Bank is presented as a gem-deposit system with fixed daily compound growth. The calculator models growth at `0.50%` per day.

## How is interest calculated?

The calculator uses compound interest. The core formula is `FV = PV x (1 + r)^t`, where:

- `FV` is the future value
- `PV` is the current deposit
- `r` is the daily rate `0.005`
- `t` is the number of days

## How accurate is the calculator?

The site uses high-precision arithmetic for very large values. Small rounding differences can still appear for very large balances or very long durations.

## Can gems be withdrawn at any time?

The page copy says withdrawals can happen at any time without penalties, but withdrawing reduces the balance that keeps compounding.

## Is there a minimum or maximum deposit?

The FAQ states a minimum deposit of `100` gems and no stated maximum.

## How do I use Goal Gems?

1. Enter `Current Gems`.
2. Enter `Goal Gems`.
3. Read the estimated time to reach that total.

## What is the difference between Time Period and Future Date?

- `Time Period` uses a duration from now.
- `Future Date` projects growth to a specific calendar date and optional time.

## Will the interest rate change?

The FAQ currently describes the calculator as using a fixed `0.50%` daily rate.

## Can the calculator model multiple deposits or withdrawals?

Not directly. The FAQ recommends separate calculations, using `Additional Gems`, or using a spreadsheet for more complex scenarios.

## How can feedback or bug reports be sent?

- Contact details: https://torturado.github.io/contact.md
- Issue tracker: https://github.com/torturado/torturado.github.io/issues
