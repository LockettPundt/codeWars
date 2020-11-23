// Given an array/list [] of integers , Find The maximum difference
// between the successive elements in its sorted form.

function maxGap(numbers) {
  let longest = 0;
  numbers.sort((a, b) => a - b).forEach((x, i, arr) => {
    if (arr[i - 1]) {
      const currentDiff = x - arr[i - 1];
      if (currentDiff > longest) {
        longest = currentDiff;
      }
    }
  });
  return longest;
}
