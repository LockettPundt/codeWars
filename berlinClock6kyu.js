
// The clock is read from the top row to the bottom. The top row of four red fields denote
// ive full hours each, alongside the second row, also of four red fields, which denote
// one full hour each, displaying the hour value in 24-hour format. The third row
// consists of eleven yellow-and-red fields, which denote five full minutes each
// (the red ones also denoting 15, 30 and 45 minutes past), and the bottom row
// has another four yellow fields, which mark one full minute each. The round
// yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

// Example: Two fields are lit in the first row (five hours multiplied by two,
//   i.e. ten hours), but no fields are lit in the second row; therefore the
//   hour value is 10.
// Six fields are lit in the third row (five minutes multiplied by six, i.e.
//   thirty minutes), while the bottom row has one field on (plus one minute).
//   Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

// Task: Write a function that takes in a particular time as 24h format
// ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock.
//  The parameters should be as follows:

// “O” = Light off
// “R” = Red light
// “Y” = Yellow light

// Example Test Case:
// Input String:
// 12:56:01

// Output String:
// O
// RROO
// RROO
// YYRYYRYYRYY
// YOOO

// Please check the example test cases for the required output format.


function berlinClock(time) {
  const result = ['', '', '', '', ''];
  const timeSplit = time.split(':');
  timeSplit.forEach((item, index) => {
    let num = parseInt(item);
    if (index === 0) {
      result[1] += num >= 20
        ? 'RRRR\n'
        : `${'R'.repeat(num % 5)}${'O'.repeat(4 - num % 5)}\n`;
      result[2] += `${'R'.repeat(num % 5)}${'O'.repeat(4 - num % 5)}\n`;
    }
    if (index === 1) {
      result[4] = `${'Y'.repeat(num % 5)}${'O'.repeat(4 - num % 5)}`;
      for (let i = 1; i < 12; i++) {
        if (num >= 3) {
          result[3] += i % 3 === 0
            ? 'R'
            : 'Y';
        } else {
          result[3] += 'O';
        }
        num -= 5;
        if (i === 11) result[3] += '\n';
      }
    }
    if (index === 2) {
      result[0] = num % 2 === 0
        ? 'Y\n'
        : 'O\n';
    }
  });
  return result.join('');
}
