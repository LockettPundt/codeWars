// Write a function called that takes a string of parentheses, and determines if the order
// of the parentheses is valid. The function should return true if the string
// is valid, and false if it's invalid.


function validParentheses(parens) {
  const stack = [];
  parens.split('').forEach((item) => (item === ')' && stack[stack.length - 1] === '(' ? stack.pop() : stack.push(item)));
  return !(stack.length);
}
