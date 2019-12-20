/*
==========================================================================
Modules
==========================================================================
*/

import Square, { name, test } from './square.js';
import Person from './person.js';

// Imported Variable
console.log(name);

// Imported Object
var square1 = new Square(100, 50);
square1.draw();

// Imported function
test();


// Imported Object from another Module
var person = new Person('Jean', 21);
person.greeting();
