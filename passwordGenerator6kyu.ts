function passwordGen() {
  const getLength = () => Math.floor(Math.random() * 15) + 6;
  const getLowerCase = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  const getUpperCase = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const getNumber = () => Math.floor(Math.random() * 10);

  const randomCharacterGenerators = [getLowerCase, getUpperCase, getNumber];
  const randomCharacters = randomCharacterGenerators.map((x) => x());

  const length = getLength();
  const passwordArray: (string | number)[] = Array.from({ length });
  const indexes: number[] = passwordArray.map((_, i) => i);
  const randomIndexes: number[] = [];

  // * get random indexes to places mandatory characters
  for (let i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random() * indexes.length);
    randomIndexes.push(indexes[randomNum]);
    indexes.splice(randomNum, 1);
  }

  // * place mandatory characters at the randomized indexes
  randomIndexes.forEach((randomIndex, i) => {
    passwordArray[randomIndex] = randomCharacters[i];
  });

  // * fill in the rest of the characters
  for (let i = 0; i < passwordArray.length; i++) {
    const current = passwordArray[i];
    if (current !== undefined) {
      continue;
    }
    passwordArray.push(
      randomCharacterGenerators[
        Math.floor(Math.random() * randomCharacterGenerators.length)
      ]()
    );
  }
  return passwordArray.join("");
}
