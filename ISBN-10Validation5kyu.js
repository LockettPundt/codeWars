/*
ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. 
The last digit can be 0-9 or X, to indicate a value of 10.
An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.
*/

function validISBN10(isbn) {
  if (isbn.length !== 10) return false;
  return (
    isbn.split('').reduce((sum, x, i, arr) => {
      if (x === 'X' && i === arr.length - 1) {
        return 10 * (i + 1) + sum;
      }
      return parseInt(x) * (i + 1) + sum;
    }, 0) %
      11 ===
    0
  );
}
