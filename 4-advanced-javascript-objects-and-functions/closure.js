/*
==========================================================================
Closure
==========================================================================
*/

function retirement(retirementAge) {
  var a = ' years left until retirement';
  /*
    An inner function has always access to the variables and parameters of its outer function 
    Event after the outer function has returned

    A closure gives us access to an outer function’s scope from an inner function event after the parent function finish
  */
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceLand = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceLand(1990);