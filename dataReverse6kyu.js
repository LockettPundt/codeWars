// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of
// these segments needs to be reversed


function dataReverse(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i + 8] === undefined) result.push(data.slice(i));
    else result.push(data.slice(i, i + 8));
    i += 7;
  }
  return result
    .reduce((acc, arr) => [...arr, ...acc], []);
}
