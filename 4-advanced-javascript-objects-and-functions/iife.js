/*
==========================================================================
Immediately Invoked Function Expression (IIFE)
==========================================================================
*/

// In this case we want to hide the score variable
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }

// game();

// iife are important for data privacy and the variables do not interfery with the others variables on the global scope
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score); // reference error;

// pass arguments to iife
(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
