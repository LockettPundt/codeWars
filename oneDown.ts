   

/**
 * Shifts each alphabetical character in the input string one position down in the alphabet.
 * Non-alphabetical characters remain unchanged.
 * 
 * @param {string} str - The input string to be processed.
 * @returns {string} - The processed string with each alphabetical character shifted one position down.
 *                     If the input is not a string, returns "Input is not a string".
 * 
 * @example
 * oneDown("abc") // returns "zab"
 * oneDown("ABC") // returns "ZAB"
 * oneDown("123") // returns "123"
 * oneDown("a1b2c3") // returns "z1a2b3"
 */
function oneDown(str: string): string {
  if (typeof str !== "string") {
    return "Input is not a string";
  }
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return str
    .split("")
    .map((letter) => {
      if (alpha.indexOf(letter) < 0) {
        return letter;
      }
      const index = alpha.indexOf(letter);
      return alpha[index === 0 ? 51 : index - 1];
    })
    .join("");
}
