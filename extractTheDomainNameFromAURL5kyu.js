// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string.


function domainName(url) {
  const arr = url.replace('https://', '')
    .replace('http://', '')
    .replace('www', '')
    .split('.');
  return arr[0]
    ? arr[0]
    : arr[1];
}
