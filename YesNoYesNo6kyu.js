
// Write a code that receives an array of numbers or strings, goes
// one by one through it while taking one value out, leaving one
// value in, taking, leaving, and back again to the beginning
// until all values are out.
// It's like a circle of people who decide that every second person
// will leave it, until the last person is there. So if the last
// element of the array is taken, the first element that's still there, will stay.
// The code returns a new re-arranged array with the taken values
// by their order. The first value of the initial array is always taken.


const yesNo = (arr) => {
  const result = [];
  const newArr = arr;
  let i = 0;
  while (newArr.length) {
    if (newArr.length === 1) {
      result.push(...newArr.splice(0, 1));
    }
    if (i > newArr.length - 1) {
      if (i === newArr.length + 1) {
        i = 1;
        result.push(...newArr.splice(i, 1));
        i += 1;
      } else {
        i = 0;
        result.push(...newArr.splice(i, 1));
        i += 1;
      }
    } else {
      result.push(...newArr.splice(i, 1));
      i += 1;
    }
  }
  return result;
};
