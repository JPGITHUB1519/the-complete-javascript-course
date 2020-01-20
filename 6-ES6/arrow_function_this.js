/*
==========================================================================
ES6 Arrow Functions: Lexical 'this' keyword
==========================================================================
*/

// ES5

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    // self of that hack to save the 'this' context on a variable to use it on the inner functions, useful for event handlers 
    var self = this;

    // document.querySelector('.green').addEventListener('click', function() {
    //   var str = 'This is box number ' + this.position + ' and it is ' + this.color;
    //   // this will print undefined because only the method of the object has access to the object values
    //   // in this case the 'this' keyword will point to the global object(window)
    //   alert(str);
    // });

    // using self / that hack
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      // this will print undefined because only the method of the object has access to the object values
      // in this case the 'this' keyword will point to the global object(window)
      alert(str);
    });
  }
}

// ES6
var box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      // Unlike an regular function, an arrow function captures the this value of the enclosing context instead of creating its own this context.
      // So, in this case we do not need the self = this hack
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

var box66 = {
  color: 'green',
  position: 1,
  // In this case the arrow function this will reference to the window object, this is because arrow functions does not create new context for the this
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      // Unlike an regular function, an arrow function captures the this value of the enclosing context instead of creating its own this context.
      // So, in this case we do not need the self = this hack
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

//box66.clickMe();


function Person(name) {
  this.name = name;
}

// ES5

Person.prototype.myFriends5 = function(friends) {
  // we can use bind(this) instead of the self / that trick
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));

  console.log(arr);
};

Person.prototype.myFriends6 = function(friends) {
  // we can use bind(this) instead of the self / that trick
  var arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];

new Person('Jhon').myFriends5(friends);
new Person('Mike').myFriends6(friends);