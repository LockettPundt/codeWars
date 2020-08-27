
// You are given a list/array which contains only integers
// (positive and negative). Your job is to sum only the numbers
// that are the same and consecutive. The result should be one list.


function sumConsecutives(s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      result[result.length - 1] += s[i];
    } else {
      result.push(s[i]);
    }
  }
  return result;
}
