/* eslint-disable no-unused-vars */
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the
//  missing second character of the final pair with an underscore ('_').


function solution(str) {
  const string = str.length % 2 === 0 ? str.split('') : `${str}_`.split('');
  const result = [];
  while (string.length > 0) {
    const temp = string.shift() + string.shift();
    result.push(temp);
  }
  return result;
}
