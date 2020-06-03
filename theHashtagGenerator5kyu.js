// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


function generateHashtag(str) {
  const strTest = str.split(' ').filter((item) => /[a-z]/gi.test(item)).join(' ');
  if (!strTest.length || strTest.length >= 140) return false;
  const splitStr = str.split(' ').filter((item) => item !== ' ');
  return splitStr.map((word, index) => (index === 0
    ? `#${word.slice(0, 1).toUpperCase()}${word.slice(1)}`
    : `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`)).join('');
}
