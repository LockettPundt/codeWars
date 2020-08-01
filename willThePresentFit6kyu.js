// Santa's elves are boxing presents, and they need your help!
// Write a function that takes two sequences of dimensions of the present
// and the box, respectively, and returns a Boolean based on whether or not
// the present will fit in the box provided. The box's walls are one unit
// thick, so be sure to take that in to account.


function willFit(present, box) {
  const sortedPresent = present.sort((a, b) => a - b);
  const sortedBox = box.sort((a, b) => a - b);
  return !sortedBox
    .filter((side, index) => side - 1 <= sortedPresent[index])
    .length
    && true;
}
