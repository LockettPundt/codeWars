// You are given a year as integer (e. g. 2001). You should return the most frequent day(s)
// of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g.
// ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

function mostFrequentDays(year) {
  let j = new Date(year, 0, 1).getDay();
  const leapYear = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  const weekDays = [
    {
      day: 'Sunday',
      count: 0,
    },
    {
      day: 'Monday',
      count: 0,
    },
    {
      day: 'Tuesday',
      count: 0,
    },
    {
      day: 'Wednesday',
      count: 0,
    },
    {
      day: 'Thursday',
      count: 0,
    },
    {
      day: 'Friday',
      count: 0,
    },
    {
      day: 'Saturday',
      count: 0,
    },
  ];
  for (let i = 1; i <= (leapYear ? 366 : 365); i++) {
    weekDays[j].count++;
    if (j === 6) {
      j = 0;
    } else {
      j++;
    }
  }

  const result = weekDays
    .filter((x) => x.count === 53)
    .map((x) => x.day);

  return result.includes('Sunday')
    ? [...result.slice(1), 'Sunday']
    : result;
}
