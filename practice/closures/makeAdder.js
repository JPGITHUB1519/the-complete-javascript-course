/*
==========================================================================
More interesting Closure Example
==========================================================================
*/

function makeAdder(x) {
  return function (y) {
    return x + y;
  } 
}

// They store differents lexical environments
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));