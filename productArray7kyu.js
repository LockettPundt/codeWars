// Given an array/list [] of integers , Construct a product array Of same size
// Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers) {
  return numbers.map((x, i) => numbers.reduce((num, y, index) => (index === i
    ? num * 1
    : num * y), 1));
}
