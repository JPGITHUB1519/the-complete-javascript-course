/*
==========================================================================
ES6 Default Parameters
==========================================================================
*/

// ES5 Default Parameters

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   // lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//   // nationality === undefined ? nationality = 'American' : nationality = nationality;

//   lastname = lastName === undefined ? lastName = 'Smith' : lastName;
//   nationality = nationality === undefined ? nationality = 'American' : nationality;

//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }


// ES6 Default Parameters

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

console.log(john);
console.log(emily);