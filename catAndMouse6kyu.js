function catMouse(x, j) {
   let distance;
   if (x.indexOf('C') < x.indexOf('m')) {
      distance = (x.indexOf('m') - x.indexOf('C'));
   } else {
      distance = (x.indexOf('C') - x.indexOf('m'));
   }
   let dog_arr = x.match(/[CDm]/g);
   if (dog_arr === null || dog_arr.length < 3) {
      return 'boring without all three';
   } else if (distance <= j && dog_arr[1] !== 'D') {
      return 'Caught!';
   } else if (distance > j) {
      return 'Escaped!'
   } else if (distance <= j && dog_arr[1] === 'D') {
      return "Protected!";
   }
}