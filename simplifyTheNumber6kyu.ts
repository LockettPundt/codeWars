
/**
 * Simplifies a number by breaking it down into its expanded form using place values.
 * For example: 123 becomes "1*100+2*10+3"
 *
 * @param n - The number to be simplified
 * @returns A string representation of the number in expanded form, with each digit
 * multiplied by its place value. Zero digits are omitted from the result.
 * 
 * @example
 * ```typescript
 * simplifyTheNumber(123) // returns "1*100+2*10+3"
 * simplifyTheNumber(70304) // returns "7*10000+3*100+4"
 * ```
 */
const simplifyTheNumber = (n: number): string => {
  const str = n.toString();
  const result = str
    .split("")
    .reduce((acc: string[], curr: string, index: number, arr: string[]) => {
      const length = arr.length - index;
      if (curr === "0") {
        return acc;
      }
      acc.push(length > 1 ? curr + "*1" + "0".repeat(length - 1) : curr);
      return acc;
    }, []);

  return result.join("+");
};
