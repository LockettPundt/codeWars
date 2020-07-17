
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name.
// Last name and first name of a guest come in the result
// between parentheses separated by a comma.


function meeting(s) {
  return s.split(';').map((item) => `(${item.toUpperCase().split(':').reverse().join(', ')})`).sort().join('');
}
