//An element is leader if it is greater than The Sum all the elements to its right side. Given an array/list [] of integers , Find all the LEADERS in the array.

var arrayLeaders = numbers => {
  return numbers.filter((a, b) => a > numbers.slice(b + 1).reduce((a, b) => a + b, 0));
}