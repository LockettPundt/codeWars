function makeLooper(str: string): () => string {
  const chars = str.split("");
  let index = 0;
  return () => {
    if (index === chars.length) {
      index = 0;
    }
    const current = chars[index];
    index++;
    return current;
  };
}
