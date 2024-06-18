function checkAnswers() {
  var correctAnswers = 0
  var incorrectAnswers = 0
  var totalQuestions = 80

  var answers = {
    question1: 'd',
    question2: 'a',
    question3: 'a',
    question4: 'b',
    question5: 'b',
    question6: 'b',
    question7: 'c',
    question8: 'c',
    question9: 'c',
    question10: 'a',
    question11: 'c',
    question12: 'c',
    question13: 'b',
    question14: 'b',
    question15: 'a',
    question16: 'a',
    question17: 'd',
    question18: 'c',
    question19: 'c',
    question20: 'b',
    question21: 'c',
    question22: 'a',
    question23: 'c',
    question24: 'a',
    question25: 'c',
    question26: 'b',
    question27: 'd',
    question28: 'a',
    question29: 'd',
    question30: 'a',
    question31: 'c',
    question32: 'd',
    question33: 'a',
    question34: 'c',
    question35: 'a',
    question36: 'c',
    question37: 'a',
    question38: 'd',
    question39: 'd',
    question40: 'b',
    question41: 'd',
    question42: 'a',
    question43: 'd',
    question44: 'c',
    question45: 'c',
    question46: 'd',
    question47: 'a',
    question48: 'b',
    question49: 'd',
    question50: 'd',
    question51: 'b',
    question52: 'a',
    question53: 'c',
    question54: 'a',
    question55: 'b',
    question56: 'a',
    question57: 'a',
    question58: 'd',
    question59: 'b',
    question60: 'b',
    question61: 'a',
    question62: 'b',
    question63: 'a',
    question64: 'c',
    question65: 'b',
    question66: 'b',
    question67: 'b',
    question68: 'c',
    question69: 'd',
    question70: 'a',
    question71: 'c',
    question72: 'b',
    question73: 'a',
    question74: 'd',
    question75: 'a',
    question76: 'c',
    question77: 'a',
    question78: 'b',
    question79: 'c',
    question80: 'b',
  }

  for (var i = 1; i <= totalQuestions; i++) {
    var q = document.querySelector(`input[name="question${i}"]:checked`)
    if (q) {
      if (q.value === answers[`question${i}`]) {
        correctAnswers++
      } else {
        incorrectAnswers++
      }
    } else {
      incorrectAnswers++
    }
  }

  var level = ''
  var description = ''
  if (correctAnswers >= 76) {
    level = 'seven'
    description = 'Very advanced'
  } else if (correctAnswers >= 70) {
    level = 'six'
    description = 'Advanced'
  } else if (correctAnswers >= 62) {
    level = 'five'
    description = 'Higher Intermediate'
  } else if (correctAnswers >= 52) {
    level = 'four'
    description = 'Intermediate'
  } else if (correctAnswers >= 40) {
    level = 'three'
    description = 'Lower Intermediate'
  } else if (correctAnswers >= 24) {
    level = 'two'
    description = 'Elementary'
  } else {
    level = 'one'
    description = 'Beginner'
  }

  var result = document.getElementById('result')
  result.innerHTML = `You have received ${correctAnswers} correct answers.<br>Your level of English knowledge is ${level} (${description}).<br><a href="results.html" target="_blank">See detailed interpretation of the results</a>`
}
