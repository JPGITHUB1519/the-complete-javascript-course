/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) 
(Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that).
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
  var random = (Math.floor(Math.random() * questions.length) + 1) - 1;
  
  console.log(questions);
  console.log(random);
  
  questions[random].ask();
  var response = prompt('Please select the correct answer (Just type the number). Or type Exit to quit.');
  questions[random].isValidAnswer(response);
})();