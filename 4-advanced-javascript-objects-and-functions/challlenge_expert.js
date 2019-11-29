/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends 
(Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. 
So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable 
at this point).
11. Display the score in the console. Use yet another method for this.
*/

(function() {

  function Question(description, answers, correctAnswer) {
    this.description = description;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  
  Question.prototype.ask = function() {
    console.log('------------------------------------------------------------------------------------------------------------------------');
    console.log(this.description);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };
  
  Question.prototype.isValidAnswer = function(answer) {
    if (answer == this.correctAnswer) {
      console.log('Correct Answer!');
      return true;
    } else {
      console.log('Incorrect Answer');
      return false;
    } 
  };
  
  var question1 = new Question(
    'How many rings are on the Olympic flag?',
    ['None', 4, 5, 7],
    2
  );
  
  var question2 = new Question(
    'How did Spider-Man get his powers',
    [
      'Military experiment gone awry',
      'Born with them',
      'Woke up with them after a strange dream',
      'Bitten by a radioactive spider'
    ],
    3
  );
  
  var question3 = new Question(
    'What are the main colors on the flag of Spain?',
    [
      'Black and yellow',
      'Green and white',
      'Blue and white',
      'Red and yellow'
    ],
    3
  );
  
  
  var question4 = new Question(
    'Are giant pandas a type of bear',
    [
      'Yes',
      'No'
    ],
    0
  );
  
  var question5 = new Question(
    'What is the longest that an elephant has lived? (That we know of)',
    [
      '17 years',
      '49 years',
      '86 years',
      '142 years'
    ],
    2
  );
  
  var questions = [question1, question2, question3, question4, question5];

  // Closure Power and introduction to the module pattern
  var score = (function() {
    var counter = 0;

    return {
      increment: function() {
        counter++;
      },
      getScore: function() {
        return counter;
      }
    }
  })();

  function init() {
    console.log('Welcome to my Quiz App!\n');
    var random;
    var response;
    while (true) {
      random = (Math.floor(Math.random() * questions.length) + 1) - 1;
      questions[random].ask();
      response = prompt('Please select the correct answer (Just type the number). Or type exit to quit.');
      if (response != 'exit' && response != 'quit') {
        if (questions[random].isValidAnswer(response)) {
          score.increment();
        }
      } else {
        break;
      }
      displayScore();
    }
    displayFinalScore();
  }

  function displayScore() {
    console.log('Actual Score: ' + score.getScore());
  }

  function displayFinalScore() {
    console.log('Thanks for participating in our quiz. Your final score was ' + score.getScore());
    alert('Thanks for participating in our quiz. Your final score was ' + score.getScore());
  }

  init();
})();