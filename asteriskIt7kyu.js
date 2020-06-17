
// You are given a function that should insert an asterisk (*)
// between every pair of even digits in the given input, and
// return it as a string. If the input is a sequence, concat
// the elements first as a string.


function asteriscIt(n) {
  const stringArr = Array.isArray(n)
    ? n.map((item) => `${item}`).join('').split('')
    : String(n).split('');
  return stringArr.map((num, index) => (parseInt(num, 2) % 2 === 0
      && parseInt(stringArr[index + 1], 2) % 2 === 0
    ? `${num}*`
    : num)).join('');
}
