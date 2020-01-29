function disariumNumber(n){
    let arr = n.toString().split('');
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += parseInt(arr[i])**(i + 1);
    }
    if (total === n) {
      return "Disarium !!";
    } else {
      return "Not !!";
    }
  }