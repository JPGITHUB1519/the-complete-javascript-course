/*
==========================================================================
Object.create
==========================================================================
*/

var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
}

// Object.create() method is used to create a new object with the specified prototype object and properties. 
// Object.create() method returns a new object with the specified prototype object and properties. 
// Object.create() is used for implementing inheritance.
var jhon = Object.create(personProto);
jhon.name = 'Jhon';
jhon.yearOfBirth = 1990;
jhon.job = 'teacher';

console.log(jhon);
jhon.calculateAge();

var jane = Object.create(personProto, 
{
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});


console.log(jane);
jane.calculateAge();
