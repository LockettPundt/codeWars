function validBraces(braces) {
  if (braces.length === 0) {
    return false;
  }
  let stack = [];
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "{" || braces[i] === " [") {
      stack.push(braces[i]);
    } else if (braces[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (braces[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (braces[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      stack.push(braces[i]);
    }
  }
  if (stack.length === 0) {

    return true;
  } else {
    return false;
  }

}