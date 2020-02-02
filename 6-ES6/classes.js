/*
==========================================================================
ES6 Classes
==========================================================================
*/

/* Important notes

  ES6 classes are not hoisted
  We only can add methods to es6 classes not properties
*/

// ES5 classes - function constructors

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};


Person5.staticTest = function() {
  console.log('Hi I am a static method');
};

// ES6 Classes

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  // Methods
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  // Static method, this is not inherited by the instances of the class
  // Static methods aren't called on instances of the class. Instead, they're called on the class itself
  static greeting() {
    console.log('Hey There');
  }
}

var john5 = new Person5('Jhon', 1990, 'teacher');
var john6 = new Person5('Jhon es6', 2000, 'coder');
console.log(john5);
console.log(john6);
john5.calculateAge();
john6.calculateAge();

// ES5 static methods
Person5.staticTest();

// calling static method es6
Person6.greeting();