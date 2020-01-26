//stop gninnips my sdrow


function spinWords(str){
  let splitStr = str.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > 4) {
      splitStr[i] = splitStr[i].split('').reverse().join('');
    }
  }
  return splitStr.join(" ");
    
 
}