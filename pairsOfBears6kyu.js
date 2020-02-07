//takes a string and a number. checks to whether a "B" or "8" pair are next to each other and if the number of pairs is equal
//to or larger than the integer argument. 

function bears(x, s){
    let finalArr = [];
    let splitString = s.split('');
    splitString.forEach((item, index) => {
      if ((item === "B" && splitString[index + 1] === "8") || (item === "8" && splitString[index + 1] === "B")) {
          finalArr.push(`${item}${splitString[index + 1]}`);
          splitString.splice(index, 1);
      }
    });
    let bool = false;
    if (finalArr.length >= x) {
      bool = true;
    }
    return [finalArr.join(''), bool];
  }