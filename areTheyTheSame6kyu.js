function comp(array1, array2){
    let result = true;
    let newArr = [];
    if (array1 === null || array2 === null) {
      result = false;
    } else if (array1 !== null && array2 !== null) {
        for (let i = 0; i < array1.length; i++) {
          newArr.push(array1[i]**2);
        }
      }
    if (array1 !== null && array2 !== null) {
      array2.sort((a, b) => a-b);
      newArr.sort((a,b) => a-b);
    }
    if (array1 !== null && array2 !== null) {
      if (newArr.join('') !== array2.join('')) {
        result = false;
      }
    }
    console.log(newArr);
    console.log(array2);
    return result;
  }