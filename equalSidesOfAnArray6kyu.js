//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to 
//the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.


function findEvenIndex(arr) {
    const result = arr.map((a, b) => arr.slice(0, b + 1).reduce((a, b) => a + b, 0) === arr.slice(b).reduce((a, b) => a + b, 0));
    return result.includes(true) ? result.indexOf(true) : -1;
  }