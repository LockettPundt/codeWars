// No description!!!

// Input :: [10,20,25,0]

// Output :: ["+0", "+10", "+15", "-10"]


function equalize(array) {
  return array.map((item) => `${item - array[0] >= 0 ? '+' : ''}${item - array[0]}`);
}
