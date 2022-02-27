// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note: the alphabet should wrap around, so Z becomes A

function changer(str) {
  return str
    .split('')
    .map((x) => {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      const charCode = x.toLowerCase().charCodeAt() + 1;
      if (98 <= charCode && charCode <= 123) {
        if (charCode === 123) {
          return String.fromCharCode(97).toUpperCase();
        } else {
          const letter = String.fromCharCode(charCode);
          if (vowels.includes(letter)) {
            return letter.toUpperCase();
          } else {
            return letter;
          }
        }
      }
      return x;
    })
    .join('');
}
