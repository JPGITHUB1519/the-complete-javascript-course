/*
==========================================================================
ES6 Maps
==========================================================================
*/

// the main difference between an object and a map is that on objects the keys must be a string or a symbol
// whileMap object holds key-value pairs where values of any type can be used as either keys or values. we can have array, numbers, function as a key

const question = new Map();

question.set('question', 'What is the official name of the latest major Javascript Version');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question);

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
  //question.delete(4);
  console.log('Answer 4 is here');
}

//console.log(question);

//question.clear();
//console.log(question);


// Loop map

question.forEach((value, key) => {
  console.log(`This is ${key}, and it's set to ${value}`);
});

// console.log(question.entries());
for (let [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));


