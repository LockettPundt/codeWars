
function sortStringsByVowels(strings) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return strings.reduce((obj, str) => {
    let consecutive = 0;
    const runningNum = str.toLowerCase().split('').reduce((num, x) => {
      if (vowels.includes(x)) {
        num += 1;
        if (num > consecutive) {
          consecutive = num;
        }
        return num;
      }
      num = 0;
      return num;
    }, 0);
    return [
      ...obj,
      {
        str,
        length: consecutive,
      },
    ];
  }, [])
    .sort((a, b) => b.length - a.length)
    .map((x) => x.str);
}
