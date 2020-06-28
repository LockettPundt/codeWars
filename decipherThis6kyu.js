// You are given a secret message you need to
// decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces


function decipherThis(str) {
  const arr = str.split(' ');
  return arr.map((word) => {
    const number = word.match(/[0-9]/gi).join('');
    const letters = word.match(/[a-z]/gi) || [];
    const result = letters.map((letter, index) => {
      if (index === 0) return letters[letters.length - 1];
      if (index === letters.length - 1) return letters[0];
      return letter;
    }).join('');
    return `${String.fromCharCode(number)}${result}`;
  }).join(' ');
}
