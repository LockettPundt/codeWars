// In this Kata, you will remove the left-most
// duplicates from a list of integers and return the result.


function solve(arr) {
  const result = [...arr];
  for (let i = 0; i < result.length; i += 1) {
    result[i] = result.indexOf(result[i]) === result.lastIndexOf(result[i])
      ? result[i]
      : null;
  }
  return result.filter((item) => item !== null);
}
