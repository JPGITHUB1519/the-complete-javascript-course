/*
==========================================================================
Basic Example
==========================================================================
*/

let odd = [1, 3, 5];
let combined = [2, 4, 6, ...odd];

/*
==========================================================================
Rest parameter

The spread operator unpacks elements.
The rest parametr packs elements into an array.
==========================================================================
*/

// rest parameter should be the last argument of a function
function f(a, b, ...args) {
  console.log(args);
}

f(1, 2, 3, 4, 5);


// Spread parameter can be anywhere
odd = [1, 3, 5];
combined = [2, ...odd, 4, 6];

console.log(combined);


/*
==========================================================================
Pushing to array
==========================================================================
*/


// ES5
var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];

Array.prototype.push.apply(rivers, moreRivers);
console.log(rivers);

// ES6
rivers.push(...moreRivers);
console.log(rivers);


/*
==========================================================================
Constructing array literal
==========================================================================
*/

let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];

console.log(chars);


/*
==========================================================================
Concatening Arrays
==========================================================================
*/

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];

console.log(allNumbers);


/*
==========================================================================
Copying an Array
==========================================================================
*/

let scores = [80, 90, 100];
let copiedScores = [...scores];

console.log(copiedScores);


/*
==========================================================================
JavaScript spread operator and strings
==========================================================================
*/

let chars2 = ['A', ...'BC', 'D'];
console.log(chars2);


