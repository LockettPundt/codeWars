//Your task is to find the first element of an array that is not consecutive.


function firstNonConsecutive(arr) {
  const newArr = arr.map((num, index) => num > arr[index - 1] + 1);
  return arr[newArr.indexOf(true)] === 0 ? 0 : arr[newArr.indexOf(true)] || null;
}