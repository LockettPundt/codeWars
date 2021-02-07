
function testIt(a,b){
  const sumNum = (num) => String(num).split('').reduce((acc, x) => acc + +x, 0)
  return sumNum(a) * sumNum(b);
}