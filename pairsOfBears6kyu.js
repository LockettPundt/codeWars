//takes a string and a number. checks to whether a "B" or "8" pair are next to each other and if the number of pairs is equal
//to or larger than the integer argument. 

function bears(x, s){
  let arrMatch = s.match(/(B8)|(8B)/g) || [];
  let bool = (arrMatch.length >= x);
  return [arrMatch.join(''), bool];
}