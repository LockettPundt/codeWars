// The corresponding sums are (put together in a list):
// [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages)
// will take as parameter a list ls and return a list of the
// sums of its parts as defined above.

function partsSums(ls) {
  const result = [ls.reduce((acc, num) => acc += num, 0)];
  for (let i = 0; i < ls.length; i++) {
    if (i === ls.length - 1) result.push(0);
    else result.push(result[result.length - 1] - ls[i]);
  }
  return result;
}
