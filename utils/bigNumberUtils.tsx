import BigNumber from "bignumber.js"

BigNumber.config({ DECIMAL_PLACES: 20, ROUNDING_MODE: BigNumber.ROUND_HALF_UP })

const ONE = new BigNumber(1)

export const formatNumber = (num: BigNumber, decimalPlaces = 0) => num.toFormat(decimalPlaces)

export const ln = (x: BigNumber): BigNumber => {
  if (x.lte(0)) throw new Error("ln(x) is undefined for x <= 0")
  if (x.eq(ONE)) return new BigNumber(0)

  // For very large numbers, use a more efficient approach
  if (x.gt(1000000)) {
    // Use the identity ln(x) = ln(x/10^k) + k*ln(10) for large x
    let k = 0
    let reducedX = x
    while (reducedX.gt(10)) {
      reducedX = reducedX.dividedBy(10)
      k++
    }
    const lnReduced = lnSmall(reducedX)
    const ln10 = new BigNumber("2.302585092994046") // Pre-computed ln(10)
    return lnReduced.plus(new BigNumber(k).times(ln10))
  }

  return lnSmall(x)
}

// Optimized ln for smaller numbers
const lnSmall = (x: BigNumber): BigNumber => {
  const y = x.minus(ONE).dividedBy(x.plus(ONE))
  const y2 = y.times(y)
  let sum = y
  let term = y
  let n = new BigNumber(3)

  // Adaptive iteration count based on precision needed
  const maxIterations = x.gt(100) ? 15 : 20
  for (let i = 1; i <= maxIterations; i++) {
    term = term.times(y2)
    const nextTerm = term.dividedBy(n)
    sum = sum.plus(nextTerm)
    n = n.plus(2)
    
    // Early termination if convergence is achieved
    if (nextTerm.abs().lt(new BigNumber("1e-15"))) break
  }

  return sum.times(2)
}

export const logBase = (x: BigNumber, base: BigNumber): BigNumber => ln(x).dividedBy(ln(base))

export const exp = (x: BigNumber): BigNumber => {
  // Handle special cases
  if (x.eq(0)) return ONE
  if (x.lt(0)) return ONE.dividedBy(exp(x.abs()))
  
  // For very large x, use exp(x) = exp(x/2^k)^(2^k) to avoid overflow
  if (x.gt(100)) {
    let k = 0
    let reducedX = x
    while (reducedX.gt(1)) {
      reducedX = reducedX.dividedBy(2)
      k++
    }
    
    let result = expSmall(reducedX)
    // Square the result k times: result^(2^k)
    for (let i = 0; i < k; i++) {
      result = result.times(result)
    }
    return result
  }
  
  return expSmall(x)
}

// Optimized exp for smaller numbers
const expSmall = (x: BigNumber): BigNumber => {
  let sum = new BigNumber(1)
  let term = new BigNumber(1)
  let n = new BigNumber(1)

  // Adaptive iteration with early termination
  for (let i = 1; i < 40; i++) {
    term = term.times(x).dividedBy(n)
    sum = sum.plus(term)
    n = n.plus(1)
    
    // Early termination if term becomes negligible
    if (term.abs().lt(new BigNumber("1e-15"))) break
  }

  return sum
}

export const customExponentiation = (base: BigNumber, exponent: BigNumber): BigNumber => {
  // Handle special cases for better performance
  if (exponent.eq(0)) return ONE
  if (exponent.eq(1)) return base
  if (base.eq(1)) return ONE
  if (base.eq(0)) return new BigNumber(0)
  
  // Use built-in method for integer exponents (much faster)
  if (exponent.isInteger()) {
    return base.exponentiatedBy(exponent)
  }
  
  // For very small exponents, use approximation
  if (exponent.abs().lt(new BigNumber("1e-10"))) {
    return ONE.plus(exponent.times(ln(base)))
  }
  
  // For cases where base is close to 1, use binomial approximation for small exponents
  if (base.minus(ONE).abs().lt(0.1) && exponent.abs().lt(10)) {
    const x = base.minus(ONE)
    const result = ONE.plus(exponent.times(x))
    return result
  }
  
  // Standard calculation for other cases
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
