// that combines arrays by alternatingly taking elements passed to it.

function combine(letters, ...nums) {
  const result = letters.reduce((acc, x, i) => {
    if (i === letters.length - 1) {
      const result = [];
      const rest = nums.map((x) => x.slice(i));
      const loops = Math.max(...rest.map((x) => x.length));
      for (let i = 0; i <= loops; i++) {
        rest.forEach((x) => x[i] && result.push(x[i]));
      }
      return [...acc, x, result];
    }
    return [...acc, x, ...nums.map((x) => x[i] || [])];
  }, []);
  const flattened = [].concat.apply([], result);
  return flattened;
}
