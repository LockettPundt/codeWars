function menFromBoys(arr){
    let even = [];
    let odd= [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0 && even.includes(arr[i]) === false) {
        even.push(arr[i]);
      } else if ( arr[i] % 2 !== 0 && odd.includes(arr[i]) === false) {
        odd.push(arr[i]);
      }
    }
    even.sort((a,b) => a - b);
    odd.sort((a,b) => b - a);
    even.push(...odd)
    return even;
  }