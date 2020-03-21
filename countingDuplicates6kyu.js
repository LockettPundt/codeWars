// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur
// more than once in the input string. The input string can be assumed
// to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  const count = [];
  text.toLowerCase().split('').forEach((a, b) => (text.slice(0, b, text.slice(b)).includes(a) && !count.includes(a) ? count.push(a) : 0));
  return count.length;
}