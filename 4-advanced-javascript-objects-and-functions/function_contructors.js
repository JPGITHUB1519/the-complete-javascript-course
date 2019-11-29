/*
==========================================================================
Function Contructors
==========================================================================
*/

// Constructor functions are writed on camelcase
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  // In this case, each time we create a new object this method will be attached to each instance
  // It's not very efficient, because every object will have same methods, same code, so it will take more memory.
  // Instead we should add the methods to the prototype property
  // A good way to use this is when we need to access to the private properties

  // this.calculateAge = function() {
  //   console.log(2016 - this.yearOfBirth);
  // }
}

// In this case the method will not be attached to the objects instances but they will able to access it (inherit) thanks to prototype chain
// via the Prototype chain
// In summary Javascript inheritance
Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
}

// We can add properties to the prototype attribute too but this is not very common and should be avoided
Person.prototype.lastname = 'Smith';


/*
  1- The new keyword creates an empty object
  2- Then Passes the newly created object as the 'this' context for the function 
  (this is because by default in a regular function call the 'this' keyword points to the global object);
  3- Returns the 'this' object
*/

var john = new Person('Jhon', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');


console.log(john);

/* 
  it will look for the calcAge() method in the john object, then (if there's no such a method) 
  it will look for this method in the prototype, then in the prototype of prototype and so on. That's how the prototype chain 
  works in simplification.
*/
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// They are acessing via the prototype
console.log(john.lastname);
console.log(jane.lastname);
console.log(mark.lastname);

  /*
  ==========================================================================
  Inspecting Prototype
  ==========================================================================
  */

console.log(john.__proto__ = Person.prototype);

var array = [1, 2, 3];

// With console.info we can inspect the property, methods and prototype of an object
console.info(array);

/*

  Functions Constructor: Array

  Array.prototype.push
  Array.prototype.map
  ......

  All the array methods are on the Array function contructor Prototype

*/