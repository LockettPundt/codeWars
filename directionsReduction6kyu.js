// Write a function dirReduc which will take an array of strings and returns an
// array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr) {
  let directions = [...arr];
  const opposites = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  };

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === opposites[directions[i + 1]]) {
      directions = [...directions.slice(0, i), ...directions.slice(i + 2)];
    }
  }

  if (arr.length !== directions.length) {
    return dirReduc(directions);
  }

  return directions;
}
