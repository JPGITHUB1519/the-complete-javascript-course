/*
==========================================================================
Bind, Call, Apply
==========================================================================
*/

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay 
      + ', Ladies and gentlemen! I\'m '
      + this.name + ', I\'m a '
      + this.job + ' and I\'m '
      + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m '
      + this.name + ', I\'m a '
      + this.job + ' and I\'m '
      + this.age + ' years old. Have a nice '
      + timeOfDay + '.');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

// calls the john presentation method with the emily object as the 'this'
// method borrowing, useful when we want to forego the inheritance because we only have a few methods to inherit
john.presentation.call(emily, 'friendly', 'afternoon');

// the same as call but the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind instead returns a new function with the presets arguments
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');


/*
==========================================================================
Preset argument in function factory using bind
==========================================================================
*/
var years = [1990, 1965, 1937, 2005, 1998];

// arraycalc is the high order function because it takes a function as a parameter
// fn in this case is a callback function
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    // as this only accept only a param, we are using bind to preset the left argument
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
// presetting the limit argument
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);