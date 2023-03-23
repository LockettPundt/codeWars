const longestRepetition = (s: string): [string, number] => {
  const results = s
    .split(``)
    .reduce(
      (acc: Record<string, number>[], letter: string, index, array) => {
        if (letter === array[index - 1]) {
          acc[acc.length - 1][letter]++;
        } else {
          acc.push({ [letter]: 1 });
        }
        return acc;
      },
      [{ '': 0 }]
    )
    .sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

  return Object.entries(results[0])[0];
};
