
// Jumping number is the number that All adjacent digits in it differ by 1.

function jumpingNumber(n) {
  const split = n.toString().split('');
  const result = split.map((x, i, arr) => {
    const num = parseInt(x);
    if (i === 0) return true;
    if (parseInt(arr[i - 1]) === num - 1
       || parseInt(arr[i - 1]) === num + 1) return true;
    return false;
  }).every((x) => !!x);
  return split.length === 1 || result
    ? 'Jumping!!'
    : 'Not!!';
}
