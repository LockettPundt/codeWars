
// Your task is to write a function that takes one parameter str that
// MUST be a string and removes all capital and small letters B, M and W.
// If data of the wrong data type was sent as a parameter the function
// must throw an error

function removeBMW(str) {
  if (typeof str !== 'string') throw Error('This program only works for text.');
  const reg = new RegExp(/(b)|(m)|(w)/, 'gi');
  return str.replace(reg, '');
}
