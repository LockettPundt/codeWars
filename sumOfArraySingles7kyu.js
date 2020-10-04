// In this Kata, you will be given an array of numbers in which two
// numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.


function repeats(arr) {
  return [...arr]
    .filter((item) => arr.lastIndexOf(item) === arr.indexOf(item))
    .reduce((acc, x) => acc + x, 0);
}
