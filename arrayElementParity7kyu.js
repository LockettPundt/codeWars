
// In this Kata, you will be given an array of integers whose elements have
// both a negative and a positive value, except for one integer that is
// either only negative or only positive. Your task will be to find that integer.


function solve(arr) {
  return arr.filter((item) => arr.indexOf(-1 * item) === -1)[0];
}
