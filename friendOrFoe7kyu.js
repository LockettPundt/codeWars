// If a name has exactly 4 letters in it, you can be sure
// that it has to be a friend of yours! Otherwise, you can be sure he's not...


function friend(friends) {
  return friends.filter((item) => item.length === 4);
}
