/**
 * @param {string[]} arr
 * You are given an array. Complete the function that returns the number of
 * ALL elements within an array, including any nested arrays.
 */
const deepCount = (arr) =>
  arr.reduce((acc, x) => {
    acc += 1;
    if (Array.isArray(x)) {
      return acc + deepCount(x);
    }
    return acc;
  }, 0);
