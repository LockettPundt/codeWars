const off = (n: number): number[] => {
  const switches: { on: boolean }[] = Array.from({ length: n }).map(() => ({
    on: false,
  }));
  for (let i = 1; i < switches.length; i++) {
    for (let j = i; j < switches.length; j += i + 1) {
      switches[j].on = !switches[j].on;
    }
  }

  return switches.reduce(
    (results: number[], current: { on: boolean }, index: number) => {
      if (!current.on) {
        results.push(index + 1);
      }
      return results;
    },
    []
  );
}
