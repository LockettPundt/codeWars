// takes a change amount and makes the smallest amount of change in american money.
//

const makeChange = amount => {
  let total = amount;
  const change = {
    H: 0,
    Q: 0,
    D: 0,
    N: 0,
    P: 0
  };
  while (total > 0) {
    if (total - 50 >= 0) {
      total -= 50;
      change.H += 1;
    } else if (total - 25 >= 0) {
      total -= 25;
      change.Q += 1;
    } else if (total - 10 >= 0) {
      total -= 10;
      change.D += 1;
    } else if (total - 5 >= 0) {
      total -= 5;
      change.N += 1;
    } else {
      total -= 1;
      change.P += 1;
    }
  }
  for (let item in change) {
    if (change[item] === 0) {
      delete change[item];
    }
  }
  return change;
};
