
// The input is a string str of digits. Cut the string into chunks
// (a chunk here is a substring of the initial string) of size sz (ignore
// the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the
// cubes of its digits is divisible by 2, reverse that chunk;
// otherwise rotate it to the left by one position. Put together
// these modified chunks and return the result as a string.

function revrot(str, sz) {
  if (str === '' || sz === 0) return '';
  const split = [];
  for (let i = 0; i < str.length; i += sz) {
    if (str.slice(i, i + sz).length === sz) {
      split.push(str.slice(i, i + sz));
    }
  }
  return split.map((item) => (item.split('').reduce((acc, num) => parseInt(num ** 2) + acc, 0) % 2 === 0
    ? item.split('').reverse().join('')
    : `${item.slice(1)}${item[0]}`)).join('');
}
