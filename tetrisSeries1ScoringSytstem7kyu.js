function getScore(arr) {
    let score = 0;
    let level = 0;
    let lines = 0;
    for (let i = 0; i < arr.length; i++) {
      if (lines >= 10) {
        level += 1;
        lines -= 10;
      }
      switch (arr[i]) {
        case 1:
          score += (level + 1) * 40;
          lines += arr[i];
          break;
        case 2:
          score += (level + 1) * 100;
          lines += arr[i];
          break;
        case 3:
          score += (level + 1) * 300;
          lines += arr[i];
          break;
        case 4:
          score += (level + 1) * 1200;
          lines += arr[i];
          break;
        default:
          score += 0
          break;
      }
    }
    return score;
        
  }