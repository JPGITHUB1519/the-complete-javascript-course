// function sum(...args) {
//   let total = 0;

//   for (const a of args) {
//     total += a;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(1, 2, 3, 'wtf')); // neh...

// The problem with this function actually is that we can pass different datatypes

// Sum only the valid numbers parameters
function sum(...args) {
  return args.filter(e => typeof e === 'number')
    .reduce((prev, curr) => prev + curr);
}


// ES5 Version
// function sum() {
//   return Array.prototype.filter.call(arguments, e => typeof e === 'number')
//     .reduce((prev, curr) => prev + curr);
// }

console.log(sum(1, 2, 3, 4, 5));


// Filter arguments by type
function filterByType(type, ...args) {
  return args.filter(e => typeof e === type);
}

let vars = filterByType('number', 1, 2, true, 'hey', { name: 'jean' }, [1, 2, 3], 3);
console.log(vars);


/*
==========================================================================
JavaScript rest parameters and arrow function
==========================================================================
*/

// arrow function does not have the arguments variable

// const combine = () => {
//   console.log(arguments);
// };

const combine = (...args) => {
  return args.reduce((prev, curr) => prev + ' ' + curr);
}

console.log(combine('Javascript', 'Rest', 'Parameters'));


/*
==========================================================================
Rest parameters in a dynamic function
==========================================================================
*/

var showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3);


/* Dynamic function creation */
let array = [];

for (let i = 0; i <= 5; i++) {
  array.push(new Function('', `console.log(${i})`));
}


