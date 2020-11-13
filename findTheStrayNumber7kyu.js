// You are given an odd-length array of integers, in which all of them are the same,
// except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
  const [result] = numbers.filter((x) => numbers.indexOf(x) === numbers.lastIndexOf(x));
  return result;
}
