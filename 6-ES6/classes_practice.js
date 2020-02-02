/*
==========================================================================
First Class Citizen
==========================================================================
*/

// We can pass class into a function, return in from a function and assign it to a variable
function factory(aClass) {
  return new aClass();
}

// Anonymous class expression as an argument
let greeting = factory(class {
  sayHi() {
    console.log('Hi');
  }
});

class Dog {
  hi() {
    console.log('Guau Guau!');
  }
};

let dogGreeting = factory(Dog);

greeting.sayHi();
dogGreeting.hi();



/*
==========================================================================
Javascript Class Expression
==========================================================================
*/

// Class expresssion. -> similar to function expressions, class expressions are not hoisted
let Animal = class {
  constructor(type) {
    this.type = type;
  }

  identify() {
    console.log(this.type);
  }
};

let duck = new Animal('duck');
duck.identify();



/*
==========================================================================
Singleton -> Implementing singleton design pattern
==========================================================================
*/

// Singleton consists on creating only one instance of an object
// In this example we are approaching singleton creating an anonymous class expression and execute it immediately similar to IIFEs

// Anonymous class expression and execute it immediately.
let app = new class {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`Starting the ${this.name}...`);
  }
}('Awesome App');

app.start();



/*
==========================================================================
Getter and Setter
==========================================================================
*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // This is a property, not a function declaration
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(str) {
    let names = str.split(' ');

    if (names.length === 2) {
      this.firstName = names[0];
      this.lastName = names[1];
    } else {
      throw 'Invalid format';
    }
  }
}


var juan = new Person('Juan', 'Perez');
console.log(juan.fullName); // Juan Perez

// set new Name
juan.fullName = 'Jean Hernandez';
console.log(juan.fullName);