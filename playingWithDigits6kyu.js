// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

function digPow(n, p) {
  const nums = String(n).split('');
  const total = nums.reduce((sum, x, i) => sum += x ** (p + i), 0);
  return total % n === 0
    ? total / n
    : -1;
}
