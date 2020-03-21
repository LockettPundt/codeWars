//takes a single number and if it's an integer, will returns how many combinations of 3rd place finishes possible amongst the horses.

function horses(n) {
  if (n !== parseInt(n)) {
    return undefined;
  } else if ((n * (n - 1) * (n - 2)) > 0) {
    return n * (n - 1) * (n - 2);
  } else {
    return n;
  }
}