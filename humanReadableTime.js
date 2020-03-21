function humanReadable(seconds) {
  let hours = 0;
  let minutes = 0;
  if (seconds === 60) {
    return '00:01:00';
  }
  while (seconds >= 60) {
    seconds -= 60;
    minutes++;
  }
  while (minutes >= 60) {
    minutes -= 60;
    hours++;
  }
  if (seconds.toString().length === 1) {
    seconds = '0' + seconds;
  }
  if (hours.toString().length === 1) {
    hours = '0' + hours;
  }
  if (minutes.toString().length === 1) {
    minutes = '0' + minutes;
  }
  return (hours + ':' + minutes + ':' + seconds);
}