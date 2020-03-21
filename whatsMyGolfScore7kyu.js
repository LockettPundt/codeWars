//takes a string of 18 scores and pars and returns the overal score. 

function golfScoreCalculator(parList, scoreList) {
  let score = 0;
  let parArr = parList.split('');
  let scoreArr = scoreList.split('');
  scoreArr.forEach((strokes, index) => {
    score += parseInt(strokes) - parseInt(parArr[index]);
  });
  return score;
}