const shortesttoChar = (s, c) => {
  return s.split('').reduce((results, current, i, arr) => {
    if (current === c) {
      results.push(0);
      return results;
    }
    const left = arr.slice(0, i).reverse();
    const right = arr.slice(i + 1);
    const possibilities = [];

    if (left.indexOf(c) >= 0) {
      possibilities.push(left.indexOf(c) + 1)
    }
    if (right.indexOf(c) >= 0) {
      possibilities.push(right.indexOf(c) + 1)
    }
    if (possibilities.length) {
      results.push(Math.min(...possibilities));
    }
    return results;
  }, []);
}