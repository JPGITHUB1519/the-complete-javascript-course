/*
==========================================================================
ES6 Strings
==========================================================================
*/

let firstName = 'Jhon';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calculateAge(year) {
  return 2019 - year;
}

// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calculateAge(yearOfBirth) + ' years old');

// ES6 Template Literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(yearOfBirth)} years old.`);

// ES6 new string methods
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));