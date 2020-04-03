// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
  return A.filter((item) => {
    const x = item;
    const arr = A;
    return arr.filter((el) => el === x).length % 2 !== 0;
  })[0];
}
