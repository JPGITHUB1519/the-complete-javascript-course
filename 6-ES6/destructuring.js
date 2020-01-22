/*
==========================================================================
ES6 Destructuring
==========================================================================
*/

// ES5
// var jhon = ['Jhon', 26];
// var name = jhon[0];
// var age = jhon[1];

// ES6

// Array Destructuring
const [name, age] = ['Jhon', 26];

console.log(name);
console.log(age);

// Object Destructuring
const obj = {
  firstName: 'John',
  lastName: 'Smith'
};

// use the same name keys as the original object
const { firstName, lastName } =  obj;

console.log(firstName);
console.log(lastName);

// we can also re-assign the names
const { firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


// Parsing returned array from a function
function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;

  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);