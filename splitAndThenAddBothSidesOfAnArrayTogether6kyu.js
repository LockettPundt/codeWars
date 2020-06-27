
// You will receive an array as parameter that contains 1 or more integers and a number n.
// Step 1: Split the array in two.
// Step 2: Put the arrays on top of each other.
// Step 3: Add them together.
// Repeat the above steps n times or until there is only one number left, and then return the array.


function splitAndAdd(arr, n) {
  if (n === 0 || arr.length === 1) return arr;
  const index = arr.length % 2 === 0
    ? arr.length / 2
    : Math.floor(arr.length / 2);
  const arr1 = [...arr.slice(0, index)];
  const arr2 = [...arr.slice(index)];
  const result = arr2.map((num, index) => {
    if (arr1.length !== arr2.length) {
      return index === 0
        ? num
        : num + arr1[index - 1];
    }
    return num + arr1[index];
  });
  return splitAndAdd(result, n - 1);
}
