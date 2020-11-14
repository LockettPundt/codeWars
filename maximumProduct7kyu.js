


function adjacentElementsProduct(array) {
  return array
    .map((x, i) => x * array[i - 1])
    .sort((a, b) => a - b)
    .pop()
}