function array_diff(a, b) {
  
    let temp = a.filter(item => !b.includes(item));
    return temp
    
  }