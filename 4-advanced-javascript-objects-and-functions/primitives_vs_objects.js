/*
==========================================================================
Primitives vs Objects
==========================================================================
*/

/*
  Primitives actually hold the value, when we set a variable is that exact value and that’s all.
  Primitives are also imutable
*/
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects are mutable
var obj1 = {
  name: 'John',
  age: 26
};

// When create an object, that value is not directly assigned to the variable. Instead, a reference in memory
// to that value is what gets set. All that variable knows about is the location of the object in memory, not the object itself
// So in this case instead of creating a new spacing of memory for the new object, it only creates a new reference to the same object.
var obj2 = obj1;
console.log(obj1.age);
console.log(obj2.age);


// to clone an object we just have to create a new reference to a new object
// with Object.assign or the spread operator
// var obj1 = {
//   name: 'John',
//   age: 26
// };

// // var obj2 = Object.assign({}, obj1);
// var obj2 = {...obj1}
// obj1.name = "Jean";


// Passing primitives and objects to a function
var age = 27;
var obj =  {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  // primitives passed by value, so in this case the original value will not change
  a = 30;
  // objects are passed by reference, so in this case the original object will mutate
  b.city = 'San Francisco'
}

change(age, obj);
console.log(age, obj);