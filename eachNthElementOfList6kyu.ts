function each(n: number, xs: number[]): number[] {
  let results: number[] = [];
  const arr = [...xs];

  if (n === 0) {
    return results;
  } else if (n < 0) {
    arr.reverse();
  }

  const index = Math.abs(n);

  for (let i = index - 1; i < arr.length; i += index) {
    results.push(arr[i]);
  }

  return results;
}
