// Given an array of words, return an array of the number of letters
// that occupy their positions in the alphabet for each word. For example,

function solve(arr) {
  return arr.map((x) => x.split('').reduce((acc, letter, i) => {
    const num = letter.toLowerCase().charCodeAt() - 97;
    if (i === num) {
      return acc + 1;
    }
    return acc;
  }, 0));
}
