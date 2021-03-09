// You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees,
// can be read, although sometimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z"
// after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

// We will call a word "shifter" if it consists only of letters "H", "I", "N", "O", "S", "X", "Z", "M" and "W".
// After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.

// Find the number of unique shifter words in the input string (without duplicates). All shifters to be counted,
// even if they are paired (like "MOM" and "WOW"). String contains only uppercase letters.


function shifter(s) {
  if (!s) return 0;
  const shifters = ['H', 'I', 'N', 'O', 'S', 'X', 'Z', 'M', 'W'];
  return new Set(s.split(' ').filter((x) => x.split('').every((letter) => shifters.includes(letter)))).size;
}
