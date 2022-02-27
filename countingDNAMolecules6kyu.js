// For a given DNA genetic code represented by a string, count the number of
// times the letters A (adenine), C (cytosine), G (guanine) and T (thymine) appears and return and object.

function getCountedNucleotides(genCode) {
  const nucleoTides = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  return genCode.split('').reduce((obj, letter) => {
    obj[letter.toUpperCase()] += 1;
    return obj;
  }, nucleoTides);
}
