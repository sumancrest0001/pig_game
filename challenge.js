(function(){
  function Question (question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestions = function(){
    console.log(this.question);
    for(let i = 0; i < this.answers.length; i++){
      console.log(`${i}: ${this.answers[i]}`);
    }
  }

  Question.prototype.displayScore = function(score){
    console.log(`Your current score is ${score}.`);
    console.log('----------------------------------');
  }
  Question.prototype.checkAnswer = function(ans, fn){
    let sc;
    if(ans === this.correctAnswer)
    {
      console.log('Correct answer');
      sc = fn(true);
    } else {
      console.log('Wrong Answer!!');
      sc = fn(false);
    }
     this.displayScore(sc);
  }
  let q1 = new Question('which is the biggest continent in the world?',
                        ['Asia', 'Australia', 'South America', 'Africa'], 0);
  let q2 = new Question('Name the largest company.',
                       ['Alibaba', 'Apple', 'Google', 'Facebook'], 1);
  let q3 = new Question('Does premitives store reference of a data?',
                      ['Yes', 'NO'], 1);
  let q4 = new Question('Javascript is the most popular language in 2019',
                       ['Yes', 'No'], 0);
  let questions = [q1, q2, q3, q4];

  function score() {
    let sc = 0;
    return function(correct){
      if (correct){
        sc++;
      }
      return sc;
    }
  }

  let scoreCount = score();

  function nextQuestion() {
    let n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestions();

    let ans = prompt('Please select the correct answer.');
    if(ans !== 'exit'){
      questions[n].checkAnswer(parseInt(ans), scoreCount);
      nextQuestion();
    }



  }
  nextQuestion();
})();
