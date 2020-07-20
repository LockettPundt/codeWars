
// In this kata you have to write a method that folds
// a given array of integers by the middle x-times.


function foldArray(array, runs) {
  if (runs === 0) return array;
  const length = array.length % 2 === 0
    ? array.length / 2
    : Math.ceil(array.length / 2);
  const left = array.slice(0, length);
  const right = array.slice(length);
  const arr = left.map((num, index) => {
    if (right[right.length - 1 - index]) {
      return num + right[right.length - 1 - index];
    }
    return num;
  });
  return foldArray(arr, runs - 1);
}
