/*
  Module Pattern

  IIFE(Anonymous function + autoexecuted) that returns an object
*/

var budgetController = (function() {

  var x = 23;

  var add = function(a) {
    return x + a;
  }

  // returning object to expose the public methods
  // this object will be asigned to the budgetController Variable
  return {
    publicTest: function(b) {
      return add(b);
    }
  }
})();


var UIController = (function() {
  // some code
})();


// the model and the UI are separate modules and should not communicate each other
// this controller is for join the model and the UI
var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetController.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  }
})(budgetController, UIController);