/*
==========================================================================
ES6 Arrow Functions

=> fat arrow
==========================================================================
*/

// ES5

const years = [1990, 1965, 1982, 1937];

var ages5 = years.map((function(el) {
  return 2016 - el;
}));

console.log(ages5);


// ES6

// Single parameter and single expresssion arrow function
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

// Multiple parameters and single expression arrow function
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

// multiline body block arrow function
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});