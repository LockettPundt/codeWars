
// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.


function longest(str) {
  let result = '';
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) temp += str[i];
    else if (str[i].charCodeAt() >= temp[temp.length - 1].charCodeAt()) {
      temp += str[i];
    } else {
      if (temp.length > result.length) {
        result = temp;
      }
      temp = str[i];
    }
    if (temp.length > result.length) {
      result = temp;
    }
  }
  return result;
}
