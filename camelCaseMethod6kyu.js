
// Write simple .camelCase method (camel_case function in PHP,
// CamelCase in C# or camelCase in Java) for strings. All words must have their
// first letter capitalized without spaces.


String.prototype.camelCase = function (str) {
  return this.split(' ')
    .filter((item) => item !== '')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');
};
