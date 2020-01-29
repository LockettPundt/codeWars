function maxProduct(numbers, size){
    let newArr = [];
    let sorted = numbers.sort((a, b) => a - b);
    let i = size;
    while (i > 0) {
      newArr.push(sorted[sorted.length - 1]);
      sorted.pop()
      i--;
    }
    let product = 1;
    for (let j = 0; j < newArr.length; j++) {
      product *= newArr[j];
    }
    return product;
  }