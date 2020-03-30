// Given an array (arr) as an argument complete the function
// countSmileys that should return the total number of smiling faces.

function countSmileys(arr) {
  return arr.filter((item) => {
    if ([')', 'D'].includes(item[item.length - 1]) && [':', ';'].includes(item[0])) {
      if (item.length === 2) {
        return item;
      } if (item.length === 3 && ['-', '~'].includes(item[1])) {
        return item;
      }
    }
  }).length;
}
