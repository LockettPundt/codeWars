// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it.
// If you have an empty array, you need to return it.


function sortArray(array) {
  const odd = array.filter((item) => item % 2 !== 0 && item !== 0).sort((a, b) => a - b) || [];
  return array.map((item) => (item === 0 || item % 2 === 0 ? item : (odd.length && odd.shift())));
}
