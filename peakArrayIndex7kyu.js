// Given an array of ints, return the index such that the sum of the elements
// to the right of that index equals the sum of the elements to the left of that index.
// If there is no such index, return -1. If there is more than one such index,
// return the left-most index.

function peak(arr) {
  const result = arr.map((x, i, y) => {
    const before = y.slice(0, i).reduce((acc, num) => acc + num, 0);
    const after = y.slice(i + 1).reduce((acc, num) => acc + num, 0);
    return before === after;
  });
  return result.indexOf(true);
}
