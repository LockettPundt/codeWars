function strToHash(str){
  return str.split(', ').map(x => x.split('=')).reduce((obj, [x, y]) => { 
    if (x) {
      return {
      ...obj,
      [x]: Number(y),
    }
    }
    return obj
  }, {})
}