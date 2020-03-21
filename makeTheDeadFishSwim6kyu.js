function parse(data) {
  let sum = 0;
  let returnArr = [];
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case "i":
        sum += 1;
        break;
      case "d":
        sum -= 1;
        break;
      case "s":
        sum = sum ** 2;
        break;
      case "o":
        returnArr.push(sum);
        break;
      default:
        break;
    }
  }
  return returnArr;
}