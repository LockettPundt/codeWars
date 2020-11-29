// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first
// max value is followed by the first minimum, followed by second max value then second min value, etc.

function solve(arr) {
  const sorted = [...arr.sort((a, b) => a - b)];
  const result = [];
  arr.forEach((x, i) => {
    if (i % 2 === 0) {
      result.push(sorted.pop());
    } else {
      result.push(sorted.shift());
    }
  });
  return result;
}
