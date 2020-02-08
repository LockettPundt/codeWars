//Given an 2D array of size m * n. Your task is to find the sum of minimum value in each row.

function sumOfMinimums(arr) {
    return arr.reduce((sum, item) => sum + Math.min.apply(Math, item), 0);
  }