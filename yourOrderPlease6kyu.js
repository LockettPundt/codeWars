/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
// Your task is to sort a given string. Each word in the string will
// contain a single number. This number is the position the word should have in the result.

function order(words) {
  const newWords = [];
  const wordsSplit = words.split(' ');
  let i = 1;
  while (i <= wordsSplit.length) {
    wordsSplit.forEach((item) => (item.includes(i) ? newWords.push(item) : ''));
    i += 1;
  }
  return newWords.join(' ');
}
