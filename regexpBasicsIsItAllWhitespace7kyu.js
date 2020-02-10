//tests whether an input contains all whitespace.


String.prototype.whitespace=function(){
    return /^[\s]*$/.test(this);
  }