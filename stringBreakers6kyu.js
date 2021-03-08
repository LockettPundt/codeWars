
// I will give you an integer (N) and a string. Break the string up
// into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

function stringBreakers(n, string) {
  const str = string.replace(/\s/g, '');
  const result = [];
  for (let i = 0; i < str.length; i += n) {
    if ((i + n) > str.length - 1) {
      result.push(str.slice(i));
      break;
    }
    result.push(str.slice(i, i + n));
  }
  return result.join('\n');
}
