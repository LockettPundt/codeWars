
// Complete the method/function so that it converts dash/underscore
// delimited words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).


const toCamelCase = (str) => {
  const strSplit = str.includes('_') ? str.split('_') : str.split('-');
  return strSplit.map((word, index) => {
    if (index === 0) return word;
    return word.length > 1 ? `${word.slice(0, 1).toUpperCase()}${word.slice(1)}` : word.toUpperCase();
  }).join('');
};
