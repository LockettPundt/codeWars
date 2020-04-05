// Your task is to Find the next higher number (int) with same '1'- Bits.


function nextHigher(n) {
  const nBits = n.toString(2).split('').filter((item) => item === '1').length;
  let trigger = false;
  let next = n + 1;
  while (trigger === false) {
    if (nBits === next.toString(2).split('').filter((item) => item === '1').length) {
      trigger = true;
      return next;
    }
    next++;
  }
}
