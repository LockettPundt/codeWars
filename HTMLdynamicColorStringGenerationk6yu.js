
// Generate a valid randomly generated hexadecimal color string. Assume all of them always have 6 digits.

const generateColor = function () {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  return Array.from({ length: 7 }).map((x, i, arr) => {
    if (i === 0) return '#';
    const letterOrNum = Math.floor(Math.random() * 2);
    if (letterOrNum === 0) {
      return String(Math.floor(Math.random() * 10));
    }
    const letterIndex = Math.floor(Math.random() * 6);
    const upperOrLower = Math.floor(Math.random() * 2);
    const randomLetter = letters[letterIndex];
    if (upperOrLower > 0) return randomLetter.toLowerCase();
    return randomLetter.toUpperCase();
  }).join('');
};
