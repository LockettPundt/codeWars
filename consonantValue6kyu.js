
// Given a lowercase string that has alphabetic characters only and
// no spaces, return the highest value of consonant substrings.


function solve(s) {
  return s.replace(/[aeiou]/g, '-')
    .split('-')
    .map((blob) => blob.split('')
      .reduce((acc, item) => acc += parseInt(item.charCodeAt() - 96), 0))
    .sort((a, b) => a - b)
    .pop();
}
