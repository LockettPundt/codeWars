
// Ever since you started work at the grocer, you have been faithfully
// logging down each item and its category that passes through. One day,
//  your boss walks in and asks, "Why are we just randomly placing the
//  items everywhere? It's too difficult to find anything in this place!"
//  Now's your chance to improve the system, impress your boss, and get
//  that raise!

// The input is a comma-separated list with category as the prefix in the
// form "fruit_banana". Your task is to group each item into the 4 categories
// Fruit, Meat, Other, Vegetable and output a string with a category on each
// line followed by a sorted comma-separated list of items.


function solution(input) {
  const groceries = {
    fruit: [], meat: [], other: [], vegetable: [],
  };
  const group = input.split(',')
    .forEach((thing) => {
      const [category, item] = thing.split('_');
      return groceries.hasOwnProperty(category)
        ? groceries[category].push(item)
        : groceries.other.push(item);
    });
  let result = '';
  for (const value in groceries) {
    if (value === 'vegetable') {
      result += `${value}:${groceries[value].sort().join(',')}`;
    } else {
      result += `${value}:${groceries[value].sort().join(',')}\n`;
    }
  }
  return result;
}
