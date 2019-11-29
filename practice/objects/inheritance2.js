function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.describe = function() {
  return this.name + ', ' + this.age + ' years old';
}

function Student(name, age) {
  Person.call(this, name, age);
}

Student.prototype = new Person();

Student.prototype.learn = function(subject) {
  console.log(this.name + ' just learned ' + subject);
}

var jeanStudent = new Student('Jean', 21);
jeanStudent.learn('Advaced Calculus');