// Write a function that receives two strings and returns n, where n is equal to the number of characters we should
// shift the first string forward to match the second. The check should be case sensitive.

function shiftedDiff(first, second) {
  let result = second;
  for (let i = 0; i < second.length; i++) {
    if (first === result) {
      return i;
    }
    result = result.slice(1) + result.slice(0, 1);
  }
  return -1;
}
