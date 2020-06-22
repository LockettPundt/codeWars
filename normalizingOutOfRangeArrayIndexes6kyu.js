
// Implement a function that normalizes out of range
// sequence indexes (converts them to 'in range' indexes) by
// making them repeatedly 'loop' around the array. The
// function should then return the value at that index.
// Indexes that are not out of range should be handled
// normally and indexes to empty sequences should return
// undefined/None depending on the language.


function normIndex(array, index) {
  if (!array.length) return undefined;
  return array[index]
    ? array[index]
    : normIndex(array, index > 0 ? index - array.length : index + array.length);
}
