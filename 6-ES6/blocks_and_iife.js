/*
==========================================================================
ES6 Blocks and IIFEs
==========================================================================
*/

// ES5 
// (function() {
//   var name = 'Jean';
//   var lastName = 'P';
// });

// console.log(name);
// console.log(lastName);

// ES6 

// block
{
  // let and const will be scoped to the block, so we do not need IIFE anymore
  const name = 'Jean';
  let lastname = 'P';

  // ES5 var will be scoped to the global scope because they are function scope
  //var test = 'a';  

  console.log(name);
}
