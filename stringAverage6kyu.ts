function averageString(str: string): string {
  if (!str) {
    return "n/a";
  }

  const nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const numArray = str.split(" ");
  const validNumbers = numArray.filter((num) => nums[num] !== undefined);

  if (numArray.length !== validNumbers.length) {
    return "n/a";
  }

  const result = Math.floor(
    validNumbers.reduce((sum, num) => {
      return sum + nums[num];
    }, 0) / validNumbers.length
  );

  return Object.entries(nums).find(([, num]) => num === result)?.[0] ?? "n/a";
}
