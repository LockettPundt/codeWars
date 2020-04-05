// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))[0];
}
