// ###Task: You have to write a function pattern which returns the following Pattern upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// ####Rules/Note:

// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// ###Pattern:

function pattern(n){
    let i = 1;
    let str = '';
    while (i <= n) {
      i === n ? str += i.toString().repeat(i) : str += i.toString().repeat(i) + "\n";
      i++;
      }
     return str;
   }