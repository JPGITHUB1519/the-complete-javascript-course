/*
==========================================================================
Javascript Inheritance Using ES6 Classes
==========================================================================
*/
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