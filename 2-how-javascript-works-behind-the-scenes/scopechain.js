/*
==========================================================================
Scope Chain
==========================================================================
*/

// First Scoping Example
// var a = 'Hello!';
// first()

// function first() {
//   var b = 'Hi!';
//   second();

//   function second() {
//     var c = 'Hey!';
//     console.log(a + b + c);  
//   }
// } 


// Execution Stack vs Scope Chain

var a = 'Hello!';
first();

function first () {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    third();
  }
}

function third() {
  var d = 'John';

  // this will throw an error because the order in which functions are called is not matter to access a variable, what matters is the scope
  // The third function does not have access to the second() scope because the third() is not lexically within the second()
  //console.log(c);
  console.log(a + d);
}