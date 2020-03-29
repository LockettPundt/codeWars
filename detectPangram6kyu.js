/* eslint-disable no-unused-vars */
// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog"
// is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string) {
  const result = [];
  const words = string.split(' ');
  words.forEach((item) => {
    item.split('').forEach((letter) => (!result.includes(letter.toLowerCase()) && /[A-Z]/gi.test(letter) ? result.push(letter.toLowerCase()) : ''));
  });
  return !!(result.length === 26);
}
