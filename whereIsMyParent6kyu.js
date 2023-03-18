function findChildren(input) {
  const inputArray = input.split('');
  const mothers = {};
  for (const item of inputArray) {
    if (item.toLowerCase() === item) {
      if (mothers[item.toUpperCase()]) {
        mothers[item.toUpperCase()] += item;
      } else {
        mothers[item.toUpperCase()] = item;
      }
    }
  }
  return Object.entries(mothers)
    .map((x) => x.join(''))
    .sort()
    .join('');
}
