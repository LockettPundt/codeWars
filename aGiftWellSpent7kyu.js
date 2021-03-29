
// You will get the value of the gift card c and a finite
// list of item values. You should return a pair of indices
// that correspond to values that add up to c:

const buy = (x, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < x) {
      const otherNum = arr.findIndex((z, index) => (z + arr[i]) === x && index > i);
      if (otherNum > 0) {
        return [i, otherNum];
      }
    }
  }
  return null;
};
