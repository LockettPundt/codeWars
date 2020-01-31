function countLettersAndDigits(input) {
    let filteredInput = input.match(/[A-Z0-9]/gi);
    console.log(filteredInput);
    if (filteredInput === null) {
      return 0
    } else {
      return filteredInput.length;;
    }
  }