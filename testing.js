console.log("this");

const hi = [1];

const there = hi.map(i => {
  return i++;
});

console.log(there);