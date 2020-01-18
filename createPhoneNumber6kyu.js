function createPhoneNumber(numbers){
    let phoneNum = [];
    for (let i = 0; i < numbers.length; i++) {
      switch (i) {
        case 0:
          phoneNum.unshift("(");
          phoneNum.push(numbers[i]);
          break;
        case 2:
          phoneNum.push(numbers[i]);
          phoneNum.push(")");
          break;
        case 3:
          phoneNum.push(" ");
          phoneNum.push(numbers[i]);
          break;
        case 6:
          phoneNum.push("-");
          phoneNum.push(numbers[i]);
          break;
        default:
          phoneNum.push(numbers[i]);
          break;
      }
    }
    return phoneNum.join("");