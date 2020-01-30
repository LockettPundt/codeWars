function lottery(str){
    let final = [];
    let match = [];
    if (/[0-9]/.test(str) === false) {
     return "One more run!";
    } else {
      match = str.match(/[0-9]/g);
    }
    for (let i = 0; i < match.length; i++) {
      if (final.includes(match[i]) === false) {
        final.push(match[i]);
      }
    }
    return final.join('');
  }