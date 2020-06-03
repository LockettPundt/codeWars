// Given a standard english sentence passed in as a string, write a method that
// will return a sentence made up of the same words, but sorted by their first
// letter. However, the method of sorting has a twist to it:

// All words that begin with a lower case letter should be at the
// beginning of the sorted sentence, and sorted in ascending order.
// All words that begin with an upper case letter should come after
// that, and should be sorted in descending order.
// If a word appears multiple times in the sentence, it should be returned
// multiple times in the sorted sentence. Any punctuation must be discarded.


const sort = (sentence) => {
  const lower = sentence.split(' ').filter((word) => word.toLowerCase() === word).map((item) => item.match(/[a-z]/gi).join('')).sort();
  const upper = sentence.split(' ').filter((word) => word.toUpperCase() === word).map((item) => item.match(/[a-z]/gi).join('')).sort();

  return [...lower, ...upper.reverse()].join(' ');
};
