function Person(name, age) {
  this.name = name;
  this.age = age
};

Person.prototype.greeting = function() {
  console.log('My name is ' + this.name);
};

export default Person;