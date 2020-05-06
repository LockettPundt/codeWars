// The objective is to return all pairs of integers
// from a given array of integers that have a difference of 2.


function twosDifference(input) {
  const result = [];
  input.forEach((num) => {
    const temp = input.filter((item) => item - num === 2);
    temp.length ? result.push([num, ...temp]) : '';
  });
  return result;
}
