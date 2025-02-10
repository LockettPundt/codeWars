/**
 * Calculates the minimum number of coins needed to make change for a given amount in cents
 * @param cents - The amount in cents to make change for (will be rounded down if negative or decimal)
 * @returns An object containing the count of each coin denomination (Quarters, Dimes, Nickels, Pennies)
 * 
 * @example
 * ```typescript
 * looseChange(56) // returns { Quarters: 2, Dimes: 0, Nickels: 1, Pennies: 1 }
 * looseChange(-435) // returns { Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0 }
 * looseChange(4.935) // returns { Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 4 }
 * ```
 */
function looseChange(cents: number): Record<string, number> {
  let amount = cents;
  const values = {
    Quarters: 25,
    Dimes: 10,
    Nickels: 5,
    Pennies: 1,
  };
  const change = {
    Nickels: 0,
    Pennies: 0,
    Dimes: 0,
    Quarters: 0,
  };

  Object.entries(values).forEach(([key, value]) => {
    const units = Math.floor(amount / value);
    if (units > 0) {
      change[key] += units;
      amount -= units * value;
    }
  });

  return change;
}
