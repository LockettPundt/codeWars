function getMiddle(s) {
    let x = s.length;
    if ((x % 2) !== 0) {
        return s[Math.floor(x / 2)];
    }
    if ((x % 2) == 0) {
        return s[(x / 2) - 1] + s[x / 2];
    }
  }
  console.log(getMiddle("kjahslkdjasLDHJ"));