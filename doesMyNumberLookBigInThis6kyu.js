// Your code must return true or false depending
// upon whether the given number is a Narcissistic number in base 10.


function narcissistic(value) {
  return !!(String(value).split('').reduce((acc, item) => parseInt(item) ** String(value).split('').length + acc, 0) === value);
}
