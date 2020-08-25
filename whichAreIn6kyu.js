// Given two arrays of strings a1 and
// a2 return a sorted array r in lexicographical
// order of the strings of a1 which are substrings
// of strings of a2.


function inArray(array1, array2) {
  const result = new Set();
  for (let i = 0; i < array1.length; i++) {
    const reg = new RegExp(array1[i], 'g');
    for (let j = 0; j < array2.length; j++) {
      const rep = array2[j].replace(reg, '');
      if (rep !== array2[j]) {
        result.add(array1[i]);
      }
    }
  }
  return [...result].sort();
}
