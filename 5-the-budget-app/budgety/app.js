/*
  Module Pattern

  IIFE(Anonymous function + autoexecuted) that returns an object
*/

// Budget Controller
var budgetController = (function() {

})();



// UI Controller
var UIController = (function() {
  // some code
})();



// Global APP Controller
// the model and the UI are separate modules and should not communicate each other
// this controller is for join the model and the UI
var controller = (function(budgetCtrl, UICtrl) {
  
  var ctrlAddItem = function() {
    // 1. Get the field input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the Budget
    // 5. Display the budget on the UI
    console.log('It works!');
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {

    // which is for older browser
    if (event.keyCode === 13 || event.which === 13) {
      console.log('Enter was pressed');
      ctrlAddItem();
    }
  });
})(budgetController, UIController);