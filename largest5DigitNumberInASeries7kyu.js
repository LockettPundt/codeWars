/* eslint-disable radix */
// Complete the solution so that it returns the greatest sequence of five
// consecutive digits found within the number given. The number will be passed in as
// a string of only digits. It should return a five digit integer.
// The number passed may be as large as 1000 digits.

const solution = (digits) => {
  let result = 0;
  digits.split('').forEach((item, index) => {
    if (parseInt(`${item}${digits.substring(index + 1, index + 5)}`) > result) {
      result = parseInt(`${item}${digits.substring(index + 1, index + 5)}`);
    }
  });
  return result;
};


export default solution;
