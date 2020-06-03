// Complete the function/method so that it takes CamelCase string and returns
//  the string in snake_case notation. Lowercase characters can be numbers.
//  If method gets number, it should return string.


function toUnderscore(string) {
  if (typeof string !== 'string') return String(string);
  return string.split('').map((letter, index) => {
    if (!parseInt(letter) && letter.toUpperCase() === letter && index !== 0) {
      return `_${letter.toLowerCase()}`;
    }
    return letter.toLowerCase();
  }).join('');
}
