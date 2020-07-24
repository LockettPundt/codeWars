// A string is considered to be in title case if each word in
// the string is either (a) capitalised (that is, only the
// first letter of the word is in upper case) or (b) considered
// to be an exception and put entirely into lower case unless it
// is the first word, which is always capitalised.

// Write a function that will convert a string into title case,
// given an optional list of exceptions (minor words). The list of minor
// words will be given as a string with each word separated by a space.
// Your function should ignore the case of the minor words string -- it
// should behave in the same way even if the case of the minor word string
// is changed.


function titleCase(title, minorWords) {
  if (!title) return '';
  const lower = minorWords ? minorWords.toLowerCase().split(' ') : [];
  return title.split(' ').map((item, index) => (index === 0 || !lower.includes(item.toLowerCase())
    ? `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    : item.toLowerCase())).join(' ');
}