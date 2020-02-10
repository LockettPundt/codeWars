//takes a string a returns a scrabble score referencing a doctionary for the value per letter.

function scrabbleScore(str){
    return str === "" ? 0 : str.match(/[a-zA-Z]/g).reduce((score, letter) => score + $dict[letter.toUpperCase()], 0);
  }