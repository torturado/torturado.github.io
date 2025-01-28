import BigNumber from "bignumber.js"

BigNumber.config({ DECIMAL_PLACES: 20, ROUNDING_MODE: BigNumber.ROUND_HALF_UP })

const ONE = new BigNumber(1)

export const formatNumber = (num: BigNumber, decimalPlaces = 0) => num.toFormat(decimalPlaces)

export const ln = (x: BigNumber): BigNumber => {
  if (x.lte(0)) throw new Error("ln(x) is undefined for x <= 0")
  if (x.eq(ONE)) return new BigNumber(0)

  const y = x.minus(ONE).dividedBy(x.plus(ONE))
  const y2 = y.times(y)
  let sum = y
  let term = y
  let n = new BigNumber(3)

  for (let i = 1; i <= 20; i++) {
    term = term.times(y2)
    sum = sum.plus(term.dividedBy(n))
    n = n.plus(2)
  }

  return sum.times(2)
}

export const logBase = (x: BigNumber, base: BigNumber): BigNumber => ln(x).dividedBy(ln(base))

export const exp = (x: BigNumber): BigNumber => {
  let sum = new BigNumber(1)
  let term = new BigNumber(1)
  let n = new BigNumber(1)

  for (let i = 1; i < 50; i++) {
    term = term.times(x).dividedBy(n)
    sum = sum.plus(term)
    n = n.plus(1)
  }

  return sum
}

export const customExponentiation = (base: BigNumber, exponent: BigNumber): BigNumber => {
  if (exponent.isInteger()) {
    return base.exponentiatedBy(exponent)
  }
  return exp(exponent.times(ln(base)))
}

export const formatDateUS = (date: Date): string => {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  })
}

