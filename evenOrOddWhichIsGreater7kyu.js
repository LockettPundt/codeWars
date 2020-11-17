// Given a string of digits confirm whether the sum of all the individual
// even digits are greater than the sum of all the indiviudal odd digits.
// Always a string of numbers will be given.

function evenOrOdd(str) {
  const even = str.split('').reduce((acc, x) => acc += Number(x) % 2 === 0 ? Number(x) : 0, 0);
  const odd = str.split('').reduce((acc, x) => acc += Number(x) % 2 !== 0 ? Number(x) : 0, 0);
  if (even > odd) {
    return 'Even is greater than Odd';
  }
  if (odd > even) {
    return 'Odd is greater than Even';
  }
  return 'Even and Odd are the same';
}
