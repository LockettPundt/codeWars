// Return the number (count) of vowels in the given string.


function getCount(str) {
  return str.split('').filter((item) => 'aeiou'.includes(item)).length;
}
