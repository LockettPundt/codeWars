// For an integer k rearrange all the elements of the given array in such way, that:

// all elements that are less than k are placed before elements that are not less than k;
// all elements that are less than k remain in the same order with respect to each other;
// all elements that are not less than k remain in the same order with respect to each other.


function splitByValue(k, elements) {
  const less = [];
  const more = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] < k) less.push(elements[i]);
    else more.push(elements[i]);
  }
  return [...less, ...more];
}
