// Build a function findNestedMaximum that finds the maximum value in an array containing both numbers and nested arrays. 
// The nested arrays themselves can contain both numbers and further 
// nested arrays. Some of the arrays may be empty but at least one number will be present amongst all the arrays.

function findNestedMaximum(arr) {
  const flatArr = arr.reduce((a, b) => Array.isArray(b) ? [...a, ...b] : [...a, b], [])
  if (flatArr.some(x => Array.isArray(x))) return findNestedMaximum(flatArr)
  return Math.max(...flatArr)
}