// Count the number of occurrences of each character and return
// it as a list of tuples in order of appearance. For empty output return an empty list.

const orderedCount = (text) => {
  const result = [];
  text.split('').forEach((letter) => {
    if (!result.filter((item) => item[0] === letter).length) {
      const count = text.split('').filter((item) => item === letter).length;
      result.push([letter, count]);
    }
  });
  return result;
};
