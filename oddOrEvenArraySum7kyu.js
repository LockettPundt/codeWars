//Given a list of numbers, determine whether the sum of its elements is odd or even.

function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";
 }