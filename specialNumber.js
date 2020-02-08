//A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5. Given a number determine if it special number or not.

function specialNumber(n){
    let nSplit = n.toString().split('');
    nSplit = nSplit.map(num => (Number(num) >= 0 && Number(num) <= 5) ? true : false);
    return nSplit.every(item => item === true) ? `Special!!` : `NOT!!`;
  }