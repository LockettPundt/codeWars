
// Modify the kebabize function so that it converts a
// camel case string into a kebab case.


function kebabize(str) {
  const kebabs = str.split('').map((item) => {
    if (item.match(/[a-z]/gi)) {
      return item.toUpperCase() === item
        ? `-${item.toLowerCase()}`
        : item;
    }
    return '';
  }).join('');
  return kebabs[0] === '-'
    ? kebabs.slice(1)
    : kebabs;
}
