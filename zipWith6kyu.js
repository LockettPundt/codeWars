// zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)

// Inputs should not be modified.

function zipWith(fn, a0, a1) {
  return a0
    .map((x, i) => {
      if (a1[i] !== undefined) {
        return fn(x, a1[i]);
      }
      return null;
    })
    .filter((x) => x !== null);
}
