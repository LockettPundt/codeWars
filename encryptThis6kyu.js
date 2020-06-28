
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.


const encryptThis = function (text) {
  const arr = text.split(' ');
  return arr.map((word) => {
    const innerArr = word.split('');
    return innerArr.map((letter, index) => {
      if (index === 0) return letter.charCodeAt();
      if (index === 1) return innerArr[innerArr.length - 1];
      if (index === innerArr.length - 1) return innerArr[1];
      return letter;
    }).join('');
  }).join(' ');
};
