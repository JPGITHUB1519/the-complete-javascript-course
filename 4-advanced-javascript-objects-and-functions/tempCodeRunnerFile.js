/*
==========================================================================
Bind, Call, Apply
==========================================================================
*/

var jhon = {
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

jhon.presentation('formal', 'morning');

// calls the jhon presentation method with the emily object as the 'this'
// method borrowing, useful when we want to forego the inheritance because we only have a few methods to inherit
jhon.presentation.call(emily, 'friendly', 'afternoon');

// the same as call but the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
jhon.presentation.apply(emily, ['friendly', 'afternoon']);

// bind instead returns a new function with the presets arguments
var jhonFriendly = jhon.presentation.bind(jhon, 'friendly');

jhonFriendly('morning');


var test = jhon.presentation;

test();