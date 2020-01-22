// Array destructuring and rest operator

// var scores = [70, 80, 90, 100];

// let [a, b, ...args] = scores;
// console.log(a); // 70
// console.log(b); // 80
// console.log(args); // [90,100]


// Default values

// let a, b;
// [a = 1, b = 2] = [10];
// console.log(a)
// console.log(b); //10 


// Swapping variables
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a); // 20
console.log(b); // 10


// Nested object and object destructuring

let employee = {
  id: 1001,
  profile: {
    firstName: 'Jhon',
    lastName: 'Doe'
  }
};

let { profile: {firstName, lastName} } = employee;
console.log(firstName);
console.log(lastName);