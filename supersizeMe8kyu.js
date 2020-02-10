//given a number, rearrange it to make the largest number possible.

function superSize(num){
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
  }