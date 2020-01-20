// ES5

// let add = function(x,y) {
//   return x + y;
// };

// ES6

/*
==========================================================================
Single expression arrow function

(param1, param2, …, paramN) => expression
==========================================================================
*/
let add = (x, y) => x + y;

let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers);


/*
==========================================================================
Arrow function with blocks

(argument1, argument2, ... argumentN) => {
  // function body
}
==========================================================================
*/
let calculate = (x, y) => { 
  var z = 10;
  return x + y + z;
};

console.log(add(5, 5));


/*
==========================================================================
Single Parameter arrow function

(singleParam) => { statements }
singleParam => { statements }
==========================================================================
*/
let names = ['Jhon', 'Mac', 'Peter'];
// let lenghts = names.map((name) => name.length);
let lenghts = names.map(name => name.length);
console.log(lenghts);


/*
==========================================================================
Arrow functions with no parameter

() => { statements }
==========================================================================
*/

let logDoc = () => console.log('Printing document....');
logDoc();

/*
==========================================================================
Line Break between parameter definition and arrow
==========================================================================
*/

// let multiply = (x, y) =>
// x * y;

// Line break between parameters
let multiply = (
  x,
  y
) =>
x * y;
console.log(multiply(2, 5));

/*
==========================================================================
Arrow functions and object literal
==========================================================================
*/

// Incorrect, Javascript engine cannot distinguish between a block and a object
// let setColor = color => { value : color};

let setColor = color => ({value: color});

let backgroundColor = setColor('red');
console.log(backgroundColor);
