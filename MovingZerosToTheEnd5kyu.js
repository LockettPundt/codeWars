/* eslint-disable no-unused-vars */
// Write an algorithm that takes an array and moves all
//  of the zeros to the end, preserving the order of the other elements.

const moveZeros = function (arr) {
  const noZeros = [];
  const zeros = [];
  arr.forEach((item) => (item === 0 ? zeros.push(item) : noZeros.push(item)));
  return [...noZeros, ...zeros];
};
