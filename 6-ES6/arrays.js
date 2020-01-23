/*
==========================================================================
Arrays in ES6
==========================================================================
*/

const boxes = document.querySelectorAll('.box');

// ES5 - Convert node list to array
var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// });

// ES6 convert nodeList To array
const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');



// ES5 - Looping arrays allowing to use continue / break

// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === 'box blue') {
//     break;
//     continue;
//   } else {
//     boxesArr5[i].textContent = 'I changed to blue';
//     boxesArr5[i].style.backgroundColor = 'dodgerblue';
//   }
// }

// ES6 - For of loop

for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue;
  } else {
    cur.textContent = 'I changed to blue!';
    cur.style.backgroundColor = 'dodgerblue';
  }
}



// ES5 Find index and value on array

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 findIndex and find methods

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

