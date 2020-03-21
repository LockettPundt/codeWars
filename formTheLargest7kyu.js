function maxNumber(n) {
  let arr = n.toString().split('').sort((a, b) => b - a);
  return parseInt(arr.join(''));
}