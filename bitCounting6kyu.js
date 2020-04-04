// Write a function that takes an integer as input, and returns the number
// of bits that are equal to one in the binary representation
// of that number. You can guarantee that input is non-negative.


const countBits = function (n) {
  return n.toString(2).split('').filter((item) => item === '1').length;
};
