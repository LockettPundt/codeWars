// In this Kata, you will be given a lower case string
// and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.

function solve(s, k) {
  let result = s.slice();
  const sortedArr = s.split('').sort();
  for (let i = 0; i < k; i++) {
    result = result.replace(sortedArr[i], '');
  }
  return result;
}
