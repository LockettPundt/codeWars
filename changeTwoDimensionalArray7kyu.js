// Function receive a two-dimensional square array of random integers. On the main diagonal,
// all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

function matrix(array) {
  return array.map((arr, index) => arr.map((y, i) => {
    if (i === index) {
      if (y >= 0) {
        return 1;
      }
      return 0;
    }
    return y;
  }));
}
