function generateHashtag(str) {
  const strWithoutSpaces = str.replaceAll(" ", "");
  if (!strWithoutSpaces || strWithoutSpaces.length > 139) {
    return false;
  }
  const strArray = str.split(" ").filter(Boolean);

  return strArray.reduce((result, current) => {
    const [first, ...rest] = current.toLowerCase().split("");
    return result + first.toUpperCase() + rest.join("");
  }, "#");
}
