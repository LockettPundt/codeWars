
/**
 * Creates a multiplication table as a 2D array.
 * @param length - The size of the table (both rows and columns).
 * @returns A 2D array representing the multiplication table where each element [i][j] 
 * contains the product of (i+1) and (j+1).
 * @example
 * ```typescript
 * multiplicationTable(3)
 * // returns:
 * // [
 * //   [1, 2, 3],
 * //   [2, 4, 6],
 * //   [3, 6, 9]
 * // ]
 * ```
 */
const multiplicationTable = (length: number) => {
  return Array.from({ length }).map((_, num) =>
    Array.from({ length }).map((_, index) => {
      return (num + 1) * (index + 1);
    })
  );
};
