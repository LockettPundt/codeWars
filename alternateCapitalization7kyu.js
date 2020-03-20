//a given string returns 2 versions, one with all even indexes capitalized and the other with
//all odd indexes capitalized.

function capitalize(s) {
  const even = s
    .split("")
    .map((letter, index) => (index % 2 === 0 ? letter.toUpperCase() : letter))
    .join("");
  const odd = s
    .split("")
    .map((letter, index) => (index % 2 !== 0 ? letter.toUpperCase() : letter))
    .join("");
  return [even, odd];
}
