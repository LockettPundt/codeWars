// Choose exactly one element from the sequence and replace it with another
// integer > 0. It is not allowed to replace a number with itself or to change no number at all.


function replacement(a) {
  const sorted = a.sort((a, b) => a - b);
  sorted[sorted.length - 1] > 1 ? sorted[sorted.length - 1] = 1 : sorted[sorted.length - 1] = 2;
  return sorted.sort((a, b) => a - b);
}
