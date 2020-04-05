// In this kata you are required to, given a string,
// replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.


function alphabetPosition(text) {
  const filteredText = text.toLowerCase().match(/[a-z]/gi) || [];
  return filteredText.map((item) => item.charCodeAt() - 96).join(' ');
}
