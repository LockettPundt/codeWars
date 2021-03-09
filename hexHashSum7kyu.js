// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex
// value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

function hexHash(code) {
  return code
    .split('')
    .reduce((arr, x) => [...arr, ...x.charCodeAt().toString(16).replace(/[^0-9]/gi, '').split('')], [])
    .reduce((sum, x) => sum + +x, 0);
}
