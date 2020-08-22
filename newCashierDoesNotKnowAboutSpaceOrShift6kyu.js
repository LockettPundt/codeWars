
// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:


function getOrder(input) {
  let result = input;
  const items = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  items.forEach((item) => {
    const regx = new RegExp(item.toLowerCase(), 'g');
    result = result.replace(regx, `${item[0].toUpperCase() + item.slice(1)} `);
  });
  return result
    .split(' ')
    .sort((a, b) => items.indexOf(a) - items.indexOf(b))
    .join(' ')
    .trim();
}
