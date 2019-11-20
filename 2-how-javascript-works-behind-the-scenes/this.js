/*
==========================================================================
The this Keyword
==========================================================================
*/

console.log(this);

// calculateAge(1965);

// In a regular function call the this variable points to the global object
// function calculateAge(year) {
//   console.log(2016 - year);
//   console.log(this); // points to the global object
// }

var jhon = {
  name: 'Jhon',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this); // In a method call the this keyword points to the container object
    console.log(2019 - this.yearOfBirth);

    // On an inner function of a method the this keyword points to the global object instead the containing object
    // This is because for the regular function call the this variable points to the global object
    function innerFunction() {
      console.log(this);
    }
  }
}

jhon.calculateAge();

var mike = {
  name: 'mike',
  yearOfBirth: 1984
}

// Method borrowing
mike.calculateAge = jhon.calculateAge;
mike.calculateAge();