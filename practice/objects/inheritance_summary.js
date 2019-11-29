/*
==========================================================================
Javascript Inheritance Summary
==========================================================================

Javascript is a prototype based inheritance language.

We have to 2 ways to create inheritance in javascript:

  - Inheritance with Javascript Constructors 
  - Inheritance with Object.create

Also we have another way to make inheritance in javascript using the ES6 class and extends keywords
by they are just syntax sugar for what it is happenning behind the scenes

In this Example I Will the 3 differents ways to make the inheritance
*/

/*
==========================================================================
Inheritance with Javascript Constructors
==========================================================================
*/

// Parent Object Constructor
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

  // Do not do this
  // this.greeting = function() {
  //   console.log('Hi!, I\'m ' + this.name);
  // }
}

Person.prototype.greeting = function() {
  console.log('Hi!, I\'m ' + this.name.first);
};

Person.prototype.farewell = function() {
  console.log(this.name.first +  ' has left the building. Bye for now!');
}

// Children Function Contructor
function Teacher(first, last, age, gender, insterests, subject, grade) {
  // extends and super() replace Call on es6, but basically it is just calling the parent class constructor
  Person.call(this, first, last, age, gender, insterests);
  this.subject = subject;
  this.grade = grade;
}

// Set as Prototype the parent class, here is where happends the inheritance
Teacher.prototype = new Person();
// Teacher.prototype = Person.prototype;   // its the same 

// Override Method
Teacher.prototype.greeting = function() {
  console.log('Hi I am the teacher '  + this.name.first);
}


let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let jeanTeacher = new Teacher('Jean', 'Urena', 21, 'M', ['Physics'], 'Advanced Math', 50);
jeanTeacher.greeting();
jeanTeacher.farewell();



/*
==========================================================================
Inheritance with Object.create
==========================================================================
*/

var person = {
  name: {
    first: 'Han',
    last: 'Solo'
  },
  age: 25,
  gender: "male",
  insterests: ['Smuggling'],

  greeting: function() {
    console.log('Hi I\'m '  + this.name.first);
  },
  farewell: function() {
    console.log(this.name.first +  ' has left the building. Bye for now!');
  }
};

var teacher = Object.create(person, {
  name: { 
    value: 
      {
        first: "Jean",
        last: 'Urena'
      }
  },
  age: { value: 21 },
  gender: { value: 'm' },
  insterests: { value: ['Physics'] },
  subject: { value: 'Advanced Math'},
  grade: { value: 5}
});

teacher.greeting();
teacher.farewell();



/*
==========================================================================
Inheritance Using ES6 Classes
==========================================================================
*/

// class replaces function
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first, 
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

class Teacher extends Person {
  // extends and super() replace call from the previous examples.
  constructor(first, last, age, gender, interests, subject, grade) {
    // calling parrent constructor
    super(first, last, age, gender, interests); // This is a must because 'this' is initialized by calling the parent constructor.
    this.subject = subject;
    this.grade = grade;
  }

  // Override Method
  greeting() {
    console.log(`Hi I am the teacher ${this.name.first}`);
  }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let jeanTeacher = new Teacher('Jean', 'Urena', 21, 'M', ['Physics'], 'Advanced Math', 5);
jeanTeacher.greeting();
jeanTeacher.farewell();