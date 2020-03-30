/* eslint-disable no-unused-vars */
// Complete the solution so that the function will
// break up camel casing, using a space between words.

function solution(string) {
  let i = 0;
  let newString = '';
  while (i < string.length) {
    if (string[i].toLowerCase() !== string[i]) {
      newString += ` ${string[i]}`;
    } else {
      newString += string[i];
    }
    i += 1;
  }
  return newString;
}
