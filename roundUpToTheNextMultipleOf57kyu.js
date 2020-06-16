
// Given an integer as input, can you round it to the next (meaning, "higher") 5?

function roundToNext5(n) {
  return n % 5 === 0 ? n : roundToNext5(n + 1);
}
