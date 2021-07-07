
const memoize = (fn) => {
  let cache = {};
  return n => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

function doTheThing(n) {
  let sequence = 0
  for (let i = 1;;i++) {
    if (i % 10 === 0 ) continue
    const revNum = +String(i).split('').reverse().join('')
    const sum = i + revNum
    const abs = Math.abs(i - revNum)
    if (sum % abs === 0) {
      sequence++
      if (sequence === n) return i
    }
  }
}

const sumDifRev = memoize(doTheThing)