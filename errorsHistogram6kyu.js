// In a factory a printer prints labels for boxes. The printer uses colors which, for the sake of simplicity,
// are named with letters from a to z (except letters u, w, x or z that are for errors).

// The colors used by the printer are recorded in a control string. For example a control string would be
// aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one
// time color h then one time color a... and so on.

// Sometimes there are problems: lack of colors, technical malfunction and a control string is produced
// e.g. uuaaaxbbbbyyhwawiwjjjwwxym where errors are reported with letters u, w, x or z.

// You have to write a function hist which given a string will output the errors as a string
// representing a histogram of the encountered errors.

// Format of the output string:

// letter (error letters are sorted in alphabetical order) in a field of 2 characters,
// a white space, number of error for that letter in a field of 6, as many "*" as
// the number of errors for that letter and "\r".

// The string has a length greater or equal to one and contains only letters from a to z.


function hist(s) {
  const errors = {
    u: 0,
    w: 0,
    x: 0,
    z: 0,
  };
  for (const i in s) {
    if (errors.hasOwnProperty(s[i])) {
      errors[s[i]] += 1;
    }
  }
  const result = [];
  for (const value in errors) {
    if (errors[value] > 0) {
      result.push(`${value}  ${errors[value]}     ${'*'.repeat(parseInt(errors[value]))}`);
    }
  }
  return result.join('\r');
}
