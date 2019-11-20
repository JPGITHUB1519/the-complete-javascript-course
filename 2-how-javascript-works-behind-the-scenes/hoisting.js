/*
==========================================================================
Hoisting in Practice
==========================================================================
*/

// Functions Hoisting

// We can declare the function later and use it first in our code. 
// In other words We can use function declaration before we declare them in our code.
// But this only works with function declaration. Not with function Expressions
calculateAge(1998);
function calculateAge(year) {
    console.log(2019 - year);
}

// Function Expressions are not hoisted, so this will throw an error 
// retirement(1956);
var retirement = function (year) {
    console.log(65 - (2019 -year));
};


// Variable Hoisting
// In the creation phase of the variable object the variables are scanned for variable declarations and are set to undefined.
console.log(age); // undefined
var age = 21;

function foo() {
    console.log(age); // undefined because when the foo function has his own execution context
    var age = 65;
    console.log(age); // 65
}

foo();
console.log(age);

