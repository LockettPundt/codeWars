//takes an array as and argument and returns true or false as to whether it's an array with integer or a float with no decimals. 

function isIntArray(arr) {
  if (arr === undefined || arr === null || !Array.isArray(arr)) {
    return false;
  }
  const newArr = arr.filter(item => isNaN(item) || typeof item !== 'number' || item % 1 !== 0);
  if (!newArr.length) {
    return true;
  } else {
    return false;
  }
}