
function toUnderscore(string) {
  if (typeof string !== 'string') return String(string);
  return string.split('').map((letter, index) => {
    if (!parseInt(letter) && letter.toUpperCase() === letter && index !== 0) {
      return `_${letter.toLowerCase()}`;
    }
    return letter.toLowerCase();
  }).join('');
}
