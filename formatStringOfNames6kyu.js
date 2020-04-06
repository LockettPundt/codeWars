// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except
// for the last two names, which should be separated by an ampersand.


function list(names) {
  return names.map((item, index) => {
    if (names.length <= 2 && index === 0) {
      return item.name;
    }
    return index === names.length - 1 ? `& ${item.name}`
      : index === names.length - 2 ? item.name : `${item.name},`;
  }).join(' ');
}
