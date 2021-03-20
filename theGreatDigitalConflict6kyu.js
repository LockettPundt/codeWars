// The Evil King of Numbers wants to conquer all space in the Digital World. For that reason, His Evilness declared war on Letters, which actually stay in the Alphabet Fragmentation. You were nominated the Great Arbiter and must provide results of battles to the technology God 3 in 1, Llib Setag-Kram Grebrekcuz-Nole Ksum.

// Description
// armyLetters consists of letters from 'a' to 'z' and armyNumbers consists of digits from '1' to '9'. The power of a letter is its position in the Latin alphabet, so the letter 'a' has power 1, 'b' has 2, .. 'z' has 26. The power of a digit is its value, so '1' has power 1, '2' has 2, .. '9' has 9.

// armyLetters fights from its end; armyNumbers fights from its beginning.

// Per round, one letter from armyLetters attacks one digit and does damage equal to its power, and one digit from armyNumbers attacks two letters and does damage equal to its power to both. Characters with 0 or lower power disappear.

// Rounds of battle continue until at least one army has completely disappeared.

// Output
// If either or both armies are empty at the start of hostilities, return "Peace".
// At the end of the war, return "Draw" if both armies died, or the final state of the winning army (as a String).
// How the attacks happen
// For example, we have "abc" and "12".

// The rightmost letter of "abc" is 'c', which has power 3, and the leftmost digit of "12" is '1'.

// 'c' attacks '1' and at the same time '1' attacks two last letters of "abc".

// String "abc" becomes "aab" because '1' attacks the last two letters: 'c' (power 3) subtracts 1 and 'b' subtracts 1; '1' was attacked and eliminated by 'c' because its power became less than or equal to zero.

// After this round we have "aab" and "2"; repeat until only one non-empty string is left and return it.

// In this case the winner is "a".


// very janky....
function battleCodes(armyLetters, armyNumbers) {
  if (!(armyLetters && armyNumbers).length) return 'Peace';
  let letters = armyLetters.split('').map((x) => x.charCodeAt() - 96);
  let numbers = armyNumbers.split('').map((x) => +x);
  while (letters.length && numbers.length) {
    const last = letters.slice(-2).map((x) => {
      if (x) {
        const result = x - numbers[0];
        if (result > 0) return result;
      }
      return 0;
    }).filter((x) => x > 0);
    numbers[0] -= letters.slice(-1)[0];
    numbers = numbers.filter((x) => x > 0);
    letters = [...letters.slice(0, -2), ...last];
  }
  if (!numbers.length && !letters.length) return 'Draw';
  if (letters.length) return letters.map((x) => String.fromCharCode(x + 96)).join('');
  return numbers.join('');
}
