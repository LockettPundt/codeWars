// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ],
// such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings.
// Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

const runLengthEncoding = (str) => {
  const result = str.split('').reduce((result, x, i, arr) => {
    if (x === arr[i - 1]) {
      const lastIndexItem = result[result.length - 1];
      return [...result.slice(0, -1), [lastIndexItem[0] + 1, x]];
    }
    return [...result, [1, x]];
  }, []);
  return result;
};
