
// When you divide the successive powers of 10 by 13 you get the
// following remainders of the integer divisions:

// 1, 10, 9, 12, 3, 4.

// Then the whole pattern repeats.

// Hence the following method: Multiply the right most digit
// of the number with the left most number in the sequence
// shown above, the second right most digit to the second left
// most digit of the number in the sequence. The cycle goes on
// and you sum all these products. Repeat this process until
// the sequence of sums is stationary.


function thirt(n) {
  const pattern = [1, 10, 9, 12, 3, 4];
  const reversed = String(n).split('').reverse();
  let sum = 0;
  let j = 0;
  for (let i = 0; i <= reversed.length - 1; i += 1) {
    if (pattern[j]) {
      sum += parseInt(reversed[i]) * pattern[j];
    } else {
      j = 0;
      sum += parseInt(reversed[i]) * pattern[j];
    }
    j += 1;
  }
  return sum === n
    ? sum
    : thirt(sum);
}
