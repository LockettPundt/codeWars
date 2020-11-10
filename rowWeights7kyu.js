// Given an array of positive integers (the weights of the people),
// return a new array/tuple of two integers, where the first one is
// the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
  return [
    array.filter((_, i) => i % 2 === 0).reduce((acc, x) => acc + x, 0),
    array.filter((_, i) => i % 2 !== 0).reduce((acc, x) => acc + x, 0),
  ];
}
