// Given an array of numbers and an index,
// return the index of the least number larger
// than the element at the given index, or -1 if there is
// no such index ( or, where applicable, Nothing or a similarly empty value ).


function leastLarger(a, i) {
  const num = a[i];
  const result = a.filter((x) => x > num)
    .sort((a, b) => a - b)[0];
  return a.indexOf(result);
}
