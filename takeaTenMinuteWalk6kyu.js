function isValidWalk(walk) {
    let stack = [];
   
    for (let i = 0; i < walk.length; i++) {
      if (!stack[0]) {
        stack.push(walk[i]);
      } else if (stack[stack.length -1] === "s" && walk[i] === "n" || stack[stack.length -1] === "n" && walk[i] === "s") {
          stack.pop();
      } else if (stack[stack.length -1] === "e" && walk[i] === "w" || stack[stack.length -1] === "w" && walk[i] === "e") {
          stack.pop();
      } else {
          stack.push(walk[i]);
      }
     
    }
    if (walk.length !== 10) {
      return false;
    } else if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  
  }