// Winter is coming, you must prepare your ski holidays. The objective of
// this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// A pair of gloves is constituted of two gloves of the same color.

// You are given an array containing the color of each glove.

// You must return the number of pair you can constitute.


// You must not change the input array.
function numberOfPairs(gloves) {
  const gloveColors = [...new Set(gloves)];

  return gloveColors.reduce((sum, color) => sum += Math.floor(gloves.filter((x) => x === color).length / 2), 0);
}
