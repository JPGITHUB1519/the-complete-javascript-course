/*
==========================================================================
Javascript Inheritance
==========================================================================
*/

// Inheritance like functionality in JavaScript using prototype object.
function Person(first, last, age, gender, interests) {
  this.name = {
    first, 
    last
  },
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.talk = function() {
  console.log('Hello!, my name is: ' + this.name.first);
}

Person.prototype.greeting = function() {
 console.log('I\'m ' + this.name.first + '.'); 
}


function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

// With this teacher can now use the methods from the Person prototype
Teacher.prototype = Person.prototype;

// Overriding Teacher Greeting
Teacher.prototype.greeting = function() {
  let prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
}


var jean = new Person('Jean', 'Urena', 21, 'M', ['Javascript', 'Video Games']);
var jhonTeacher = new Teacher('Jhon', 'Urena', 25, 'M', ['Math', 'Physics'], 'Advanced Mathematics');

console.log(jean);
jean.talk();
console.log(jhonTeacher);
jhonTeacher.talk();
jhonTeacher.greeting();