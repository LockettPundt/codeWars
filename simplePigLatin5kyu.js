/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.


function pigIt(str) {
  const punct = ['!', '?'];
  return str.split(' ').map((item) => (item.length > 1 ? `${item.slice(1)}${item[0]}ay`
    : !punct.includes(item) ? `${item}ay` : item)).join(' ');
}
