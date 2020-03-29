/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// Create a moreZeros function which will receive a string for input, and return
// an array containing only the characters from that string whose binary representation
// of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurence of any
//  such duplicates, so they are in the same order in the final array
//  as they first appeared in the input string.


function moreZeros(s) {
  const result = [];
  s.split('').forEach((letter) => {
    const num = [];
    num.push(letter.charCodeAt(0).toString(2));
    num[0].split('').filter((item) => item === '0')
      .length > num[0]
      .split('').filter((item) => item === '1')
      .length ? (!result.includes(item) && result.push(item)) : 'hi';
  });
  return result;
}
