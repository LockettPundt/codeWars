function mineLocation(field) {
  let result = [];
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        result.push(field.indexOf(field[i]));
        result.push(field[i].indexOf(field[i][j]));
        break;
      }
    }
  }
  return result;
}