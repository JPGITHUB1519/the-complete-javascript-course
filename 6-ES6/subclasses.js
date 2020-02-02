/*
==========================================================================
Classes with Subclasses
==========================================================================
*/

// ES5 Inheritance

// Super Class
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

// Subclass
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  // calling the parent function constructor passing as the this value the empty object from the new keyword
  Person5.call(this, name, yearOfBirth, job);

  this.olympicGames = olympicGames;
  this.medals = medals;
};

// subclass extends superclass
Athlete5.prototype = Object.create(Person5.prototype);

// Methods specific to the Athlete 5
Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5('Jhon', 1990, 'swimmer', 3, 10);

console.log(johnAthlete5);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6 Inheritance

// superclass
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
}


// subclass
class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    // calling the parent constructor
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('Jhon', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();


