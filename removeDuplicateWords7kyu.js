//takes a string and removes duplicate entries.

function removeDuplicateWords (s) {
    const sArr = s.split(" ");
    let newArr = [];
    sArr.filter( item => {
      if (newArr.includes(item) === false) {
        newArr.push(item);
      }
    });
    return newArr.join(" ");
  }