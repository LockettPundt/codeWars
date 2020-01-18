decodeMorse = function(morseCode){
    MORSE_CODE['.--']
    let arr = morseCode.split(" ");
    let decode = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '') {
        decode += " ";
      } else {
        decode += MORSE_CODE[arr[i]];
        }
    }
   while (decode.includes("  ")) {
     decode = decode.replace("  ", " ");
   }
   return decode.trim();
   console.log(decode);
   console.log(arr);
 }