/*
==========================================================================
Spread Operator
==========================================================================
*/

// ES5 - Passing the values of an array as parameters of a function
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum1);
console.log(sum2);

// ES6 - Using spread to pass the values of an array as parameters of a function

const sum3 = addFourAges(...ages);


// Joining Arrays

const familySmith = ['Jhon', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];

console.log(bigFamily);


// Nodelist Sample
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
let all = [h, ...boxes];

// all = Array.from(all);
all.forEach(element => element.style.color = "purple");

