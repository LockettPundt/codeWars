// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  const str = String(num).split('');
  const result = str.map((item, index) => item !== '0' && `${item}${'0'.repeat(str.length - 1 - index)}`).filter((x) => !!x);

  return result.join(' + ');
}
