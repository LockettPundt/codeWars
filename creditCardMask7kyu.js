/* eslint-disable no-unused-vars */
// Your task is to write a function maskify,
// which changes all but the last four characters into '#'.


function maskify(cc) {
  return cc.length <= 4 ? cc : cc.split('').map((item, index) => (index < cc.length - 4 ? '#' : item)).join('');
}
