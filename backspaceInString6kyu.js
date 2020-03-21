// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


function cleanString(s) {
  let newString = [];
  let inputArr = s.split("");
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] !== "#") {
      newString.push(inputArr[i]);
    } else {
      newString.pop();
    }
  }
  return newString.join("");
};