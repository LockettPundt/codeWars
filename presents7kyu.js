// Input
// Input contains array with N integers: the i-th number is j - the number of a friend who gave a gift to friend number i.
// It is guaranteed that each friend received exactly one gift. It is possible that some friends do not share Petya's
// ideas of giving gifts to somebody else. Those friends gave the gifts to themselves.

// Output
// Return array with N integers: the i-th number should equal the number of the friend who gave a gift to friend number i.

function presents(a) {
  return a.reduce((arr, x, i) => {
    arr[x - 1] = i + 1;
    return arr;
  }, Array.from({ length: a.legnth - 1 }));
}
