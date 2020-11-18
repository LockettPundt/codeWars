function minValue(values) {
  const result = [...new Set(values)].sort((a, b) => a - b).join('');
  return +result;
}
