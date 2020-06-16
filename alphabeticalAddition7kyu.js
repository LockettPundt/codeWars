// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'


function addLetters(...letters) {
  const sum = letters.reduce((acc, letter) => {
    acc += letter.charCodeAt() - 96;
    return acc = acc > 26 ? acc - 26 : acc;
  }, 0) || 26;
  return String.fromCharCode(sum > 26 ? sum + 70 : sum + 96);
}
