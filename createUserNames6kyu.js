// The value of the username property is composed by concatenating:

// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting
// age from the current year. Please make sure that your function delivers the correct
// birth year irrespective of when it will be executed, for example it should also work
// correctly for a meetup organised in 10-years-time. The example above assumes that
// the function is run in year 2020.


function addUsername(list) {
  return list.map((x) => ({
    ...x,
    username: x.firstName.toLowerCase() + x.lastName.toLowerCase()[0] + +`${+(new Date().getFullYear()) - x.age}`,
  }));
}
