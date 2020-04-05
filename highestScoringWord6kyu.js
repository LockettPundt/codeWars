// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position
// in the alphabet: a = 1, b = 2, c = 3 etc.

// // You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x) {
  let total = 0;
  let word = '';
  x.split(' ').forEach((item) => {
    const temp = item.split('').map((letter) => letter.charCodeAt() - 96).reduce((acc, letter) => acc += letter);
    if (temp > total) {
      total = temp;
      word = item;
    }
  });
  return word;
}
