function songDecoder(song) {
  let newSong = '';
  if (song.match(/(WUB)/g)) {
    newSong = song.replace(/(WUB)+/g, ' ');
  } else {
    newSong += song;
  }
  while (newSong[0] === ' ') {
    newSong = newSong.substr(1);
  }
  while (newSong.endsWith(' ')) {
    newSong = newSong.slice(0, -1);
  }
  return newSong;
}
