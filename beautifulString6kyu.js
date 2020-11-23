// A string is said to be beautiful if "b" occurs in it no more
// times than "a"; "c" occurs in it no more times than "b"; etc.

function isBeautifulString(s) {
  const arr = Array.from({ length: 26 });
  for (let i = 0; i < arr.length; i++) {
    const splitS = s.split('');
    arr[i] = splitS.filter((x) => x === String.fromCharCode(97 + i)).length;
    if (i !== 0 && arr[i] > arr[i - 1]) return false;
  }
  return true;
}
