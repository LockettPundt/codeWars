// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""


var removeVowels = function(str){
    if (str.match(/[^aeiou]/g) === null) {
      return "";
    } else {
      return str.match(/[^aeiou]/g).join('');
    }
   }