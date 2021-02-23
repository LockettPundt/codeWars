
// Two integer numbers are added using the column addition method.
// When using this method, some additions of digits produce non-zero carries to the next positions.
// Your task is to calculate the number of non-zero carries that will
// occur while adding the given numbers.

function numberOfCarries(a, b) {
  const [first, second] = [...arguments]
    .map((x) => String(x).split('').reverse())
    .sort((a, b) => a.length - b.length);
  let carries = 0;
  let currentCarry = false;
  for (let i = 0; i < second.length; i++) {
    let temp = +second[i] + (+first[i] || 0);
    if (currentCarry) {
      temp += 1;
    }
    if (temp >= 10) {
      carries++;
      currentCarry = true;
    } else {
      currentCarry = false;
    }
  }
  return carries;
}
