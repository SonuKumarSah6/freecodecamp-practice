
function getAverage
(scores) {
  let total = 0;

  for (let i = 0; i < 
  scores.length; i++) {
    total += scores[i];
  }

  return total / scores.
  length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) 
  {
    return "A";
  } else if (score >= 80) 
  {
