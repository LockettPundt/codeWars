/* eslint-disable no-unused-vars */
// The goal of this exercise is to convert a string to a new
// string where each character in the new string is
// "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word) {
  const newWord = word.toLowerCase().split('');
  return newWord.map((item) => (newWord.lastIndexOf(item) === newWord.indexOf(item) ? '(' : ')')).join('');
}
