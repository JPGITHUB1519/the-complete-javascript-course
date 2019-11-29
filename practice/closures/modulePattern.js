/*
=============================================================================================
Module Pattern Using Closure

Using closures to define public functions that can access private functions and variables. 
=============================================================================================
*/

// this is an object with private variables and functions using closures
var counter = (function() {
  // private variable
  var privateCounter = 0;

  // private function
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());

// Counter Factory
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increment();
counter2.decrement();
console.log(counter1.value());
console.log(counter2.value());


