// In this Kata, you will sort elements in an array by
// decreasing frequency of elements. If two
// elements have the same frequency, sort them by increasing value.


function solve(arr) {
  const obj = [...arr].reduce((acc, num) => {
    if (!acc[num]) acc[num] = 1;
    else acc[num] += 1;
    return acc;
  }, {});
  return [...arr].sort((a, b) => {
    if (obj[b] === obj[a]) return a - b;
    return obj[b] - obj[a];
  });
}
