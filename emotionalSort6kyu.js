/**
 * @param {string[]} arr
 * @param {boolean} order
 * @returns {string[]}
 */

const sortEmotions = (arr, order) => {
  const trueOrder = [`:D`, `:)`, `:|`, `:(`, `T_T`];
  const sortedArr = arr.sort(
    (a, b) => trueOrder.indexOf(a) - trueOrder.indexOf(b)
  );
  return order ? sortedArr : sortedArr.reverse();
};
