//You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, 
//and (b) with each successive string starting one character further in from the end of the original string.


function reverseSlice(str) {
    let strArr = [];
    let i = 0;
    while (i < str.length) {
      strArr.push(str.split('').reverse().join('').slice(i));
      i++;
    }
    return strArr;
  }