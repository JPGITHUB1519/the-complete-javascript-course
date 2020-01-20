/*
==========================================================================
ES6 let and const
==========================================================================
*/


// // ES5
// var name5  = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller'; // this will fail because variables declared with const we cannot change its value
// console.log(name6);


// ES5
function driverLicense5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }

  // var is function scopped, so this will work
  console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}

function driverLicense6(passedTest) {
  if (passedTest) {
    let firstName = 'John';
    const yearOfBirth = 1990;
  }

  // this will fail because let and const are block scoped
  console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}

driverLicense5(true);
driverLicense6(true);


// ES5
var i = 20;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // Will print 5 because the variable used on the for block is the same as the global scope

// ES6
let i = 20;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // Will print 20 because a new variable was created for the for loop unlike the var statement