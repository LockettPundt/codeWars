
// Write a function, persistence, that takes in a positive
// parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits
// in num until you reach a single digit.


function persistence(num) {
  let sum = 0;
  let currentNum = String(num).split('');
  while (currentNum.length > 1) {
    const temp = currentNum.reduce((acc, item) => acc *= parseInt(item), 1);
    currentNum = String(temp).split('');
    sum++;
  }
  return sum;
}
