// In this kata you will be given a list consisting
// of unique elements except for one thing that appears twice.

// Your task is to output a list of everything
// inbetween both occurrences of this element in the list.


function duplicateSandwich(a) {
  const item = Array.isArray(a)
    ? a.find((x) => a.indexOf(x) !== a.lastIndexOf(x))
    : a.split('').find((x) => a.indexOf(x) !== a.lastIndexOf(x));
  return a.slice(a.indexOf(item) + 1, a.lastIndexOf(item));
}
