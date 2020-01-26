function oddRow(n) {
    let rowArr = [];
    let start = (n**2 - n)
    if (n === 1) {
      return [1];
    }
    while (rowArr.length < n) {
      if (rowArr.length === 0) {
        rowArr.push(start + 1);
    } else {
      rowArr.push(rowArr[rowArr.length - 1] + 2);
      }
    }
    return rowArr;
   }