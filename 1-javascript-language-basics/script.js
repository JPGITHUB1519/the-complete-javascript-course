/*
==========================================================================
Hello World
==========================================================================
*/
// console.log('Hello World!!');




/*
==========================================================================
Variables and Datatypes
==========================================================================
*/

// var firstName = 'Jean';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 21;

// var fullAge = true;

// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Software Developer';
// console.log(job);




/*
==========================================================================
Variable Mutation and Type Coercion
==========================================================================
*/

// var firstName = 'Jean';
// var age = 21;

// // Type Coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Software Developer';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married ' + isMarried);

// // Variable Mutation
// age = 'Twenty one';
// job = 'Teacher';

// alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);




/*
==========================================================================
Basic Operators
==========================================================================
*/

// var now = 2019;
// var ageJean = 21;
// var ageJhon = 33;

// // Math Operators
// var yearJean = now - ageJean;
// var yearJhon = now - ageJhon;


// console.log(yearJean);
// console.log(yearJhon);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logical Operators
// var jeanOlder = ageJean > ageJhon;
// var jhonOlder = ageJhon > ageJean;

// console.log(jeanOlder);
// console.log(jhonOlder);

// // typeof Operator
// console.log(typeof(jeanOlder));
// console.log(typeof(ageJean));
// console.log(typeof('Jhon is older than Jean'));
// var x;
// console.log(typeof(x));




/*
==========================================================================
Operator Precedence
==========================================================================
*/

// var now = 2019;
// var yearJean = 1998;
// var fullAge = 18;

// // Multiple Operators
// var isFullAge = now - yearJean >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJean = now - yearJean;
// var ageMark = 35;
// var average = (ageJean + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// // assignments operator uses right to left associativity
// x = y = (3 + 5) * 4 - 6;     // 8 * 4 - 6 = 32 - 6 = 26
// console.log(x, y);

// // More Operators
// x *= 2;   // x =  x * 2;
// console.log(x);

// x += 10;  // x = x + 10;
// console.log(x);

// // PostFix Operator - increments y and returns the original value of y
// var y = 10;
// var z = y++;
// console.log(z);

// // Prefix Operator - increments y and returns the incremented value of y
// y = 10;
// var z = ++y;
// console.log(z);




// /*****************************
// * CODING CHALLENGE 1
// */

// /*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
// BMI = mass / height^2 = mass / (height * height).  (mass in kg and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
// GOOD LUCK 😀
// */

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJonh = 92;
// var heightJohn = 1.95;

// var markBMI = massMark / heightMark ** 2;
// var jhonBMI = massJonh / heightJohn ** 2;

// var isMarkBMIhigher = markBMI > jhonBMI;

// console.log('Mark\'s BMI: ', markBMI);
// console.log('John\s BMI: ', jhonBMI);
// console.log('Is Mark\'s BMI higher than John\'s?', isMarkBMIhigher);

/*
==========================================================================
if / else Statements 
==========================================================================
*/

// var firstName = 'Jean';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }


// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJonh = 92;
// var heightJohn = 1.95;

// var markBMI = massMark / heightMark ** 2;
// var jhonBMI = massJonh / heightJohn ** 2;

// if (markBMI > jhonBMI) {
//   console.log('Mark\'s BMI is higher than Jhon\'s');
// } else {
//   console.log('John\'s BMI is higher than Mark\'s')
// }



/*
==========================================================================
Boolean Logic
==========================================================================
*/

// var firstName = 'Jean';
// var age = 21;

// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man');
// } else {
//   console.log(firstName + ' is a man');
// }



/*
==========================================================================
The Ternary Operator and Switch Statements
==========================================================================
*/

// Ternary Operator
// var firstName = 'Jean';
// var age = 21;

// age >= 18 ? console.log(firstName + ' drinks beer.') : ' drinks juice';

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // same as 
// // if (age >= 18) {
// //   var drink = 'beer';
// // } else {
// //   var drink = 'juice';
// // }

// // Switch Statement
// var job = 'instructor';

// switch (job) {
//   case 'teacher': 
//   case 'instructor':
//     console.log(firstName + ' teaches kids kow to code.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives an uber in Lisbon');
//     break;
//   case 'designer':
//     console.log(firstName + ' design beautiful websites');
//     break;
//   default:
//     console.log(firstName + ' does something else.');
//     // it does not needs break because this is the last case
// }

// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man');
//     break;
//   default:
//   console.log(firstName + ' is a man');   
// }



/*
==========================================================================
Truthy and Falsy Values and Equality Operators
==========================================================================
*/

// Falsy Value: false, 0, 0n, "", '', `` (Empty string), null, undefined, NaN
// Truthy Values: Not falsy values

// var height;

// // as undefined is a falsy value it is converted to false when encountered in a Boolean context.
// if (height || height === 0) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has not been defined');
// }

// // Equality Operators
// height = 23;

// if (height == '23') {
//   console.log('The == operator does type coercion');
// } 

// // Strict equiality operator
// if (height === '23') {
// } else {
//   console.log('The === operator does not do type coercion');
// }




// /*****************************
// * CODING CHALLENGE 2
// */

// /*
// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
// while Mike's team scored 116, 94 and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
// GOOD LUCK 😀
// */

// var jhonTeamScore1 = 89;
// var jhonTeamScore2 = 120;
// var jhonTeamScore3 = 103;

// var mikeTeamScore1 = 116;
// var mikeTeamScore2 = 94;
// var mikeTeamScore3 = 13;

// var maryTeamScore1 = 97;
// var maryTeamScore2 = 134;
// var maryTeamScore3 = 105;

// var jhonTeamAverage = (jhonTeamScore1 + jhonTeamScore2 + jhonTeamScore3) / 3;
// var mikeTeamAverage = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3) / 3;
// var maryTeamAverage = (maryTeamScore1 + maryTeamScore2 + maryTeamScore3) / 3;

// // Draw case
// // var jhonTeamAverage = 50;
// // var mikeTeamAverage = 50;
// // var maryTeamAverage = 50;

// console.log('Jhon\'s team average score:', jhonTeamAverage);
// console.log('Mike\'s team average score:', mikeTeamAverage);
// console.log('Mary\'s team average score:', maryTeamAverage);

// if (jhonTeamAverage > mikeTeamAverage && jhonTeamAverage > maryTeamAverage) {
//   console.log('Jhon\'s team won with the next score:', jhonTeamAverage);
// } else if (mikeTeamAverage > jhonTeamAverage && mikeTeamAverage > maryTeamAverage) {
//   console.log('Mike\'s team won with the next score:', mikeTeamAverage);
// } else if (maryTeamAverage > jhonTeamAverage && maryTeamAverage > mikeTeamAverage) {
//   console.log('Mary\'s team won with the next score:', maryTeamAverage);
// } else {
//   console.log('Draw!');
// }



/*
==========================================================================
Functions
==========================================================================
*/

// function calculateAge(birthYear) {
//   return 2019 - birthYear;
// }

// var ageJean = calculateAge(1998);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJean, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(firstName + ' is already retired');
//   }
// }

// yearsUntilRetirement(1990, 'Jhon');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');



/*
==========================================================================
Function Statements and Expressions
==========================================================================
*/

// // Function Declaration (function statement)
// // function whatDoYouDo(job, firstName) {}

// // Function Expression
// var whatDoYouDo = function(job, firstName) {
//   switch(job) {
//     case 'teacher': 
//       return firstName + ' teaches kids how to code';
//     case 'driver':
//       return firstName + ' drives a cab in Lisbon';
//     case 'designer':
//       return firstName + ' designs beautiful websites';
//     default:
//       return firstName + ' does something else';
//   }
// };

// console.log(whatDoYouDo('driver', 'Jean'));
// console.log(whatDoYouDo('designer', 'Jean'));

// /* Expressions vs Statements
//   - Expressions: Piece of code that always produce a value.
//     for example: 2 + 1, function expressions etc...

//   - Statements: is an instruction to perform a specific action, it does does not produce a value 
//     for example if, switch, for statements, creating a variable.
// */



/*
==========================================================================
Arrays
==========================================================================
*/

// // Array Initialization
// var names = ['Jhon', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// // Accessing element of array by index
// console.log(names[0]);
// // Print full array
// console.log(names);
// // know the amount of elements of the array
// console.log(names.length);

// // Modify array data
// names[0] = 'Jean';
// names[names.length] = 'Carlos';
// console.log(names);

// names[5] = 'Peter';
// console.log(names);

// // Arrays can hold different data types
// var jhon = ['Jhon', 'Smith', 1990, 'teacher', false];

// // Array methods
// // add element to the end of the array
// jhon.push('red');

// // add element to the beginnig of the array
// jhon.unshift('DR.');

// // Remove last element
// jhon.pop();

// // Remove first element
// jhon.shift();

// console.log(jhon);

// // The indexOf() method returns the position of the first occurrence of a specified value in a string
// console.log(jhon.indexOf(1990));
// var isDesigner = jhon.indexOf('designer') === -1 ? 'Jhon is not a designer' : 'Jhon is a designer';
// console.log(isDesigner);




// /*****************************
// * CODING CHALLENGE 3
// */

// /*
// John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
// To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
// He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
//  and 10% if the bill is more than $200.

// In the end, John would like to have 2 arrays:
// 1) Containing all three tips (one for each bill)
// 2) Containing all three final paid amounts (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
// GOOD LUCK 😀
// */

// var bills = [124, 48, 268];
// var finalPaidAmount = [
//   bills[0] + tipCalculator(bills[0]),
//   bills[1] + tipCalculator(bills[1]),
//   bills[2] + tipCalculator(bills[2])
// ];

// function tipCalculator(bill) {
//   if (bill < 50) {
//     return bill * 0.2;
//   } else if (bill >= 50 && bill <= 200) {
//     return bill * 0.15;
//   } else if (bill > 200) {
//     return bill * 0.10;
//   }
// }
// console.log(finalPaidAmount);




/*
==========================================================================
Objects and Properties
==========================================================================
*/

// // Object Literal notation
// var jean = {
//   firstName: 'Jean',
//   lastName: 'Smith',
//   birthYear: 1999,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'Sotware Developer',
//   isMarried: false
// };

// // Get data from Object

// // Dot notation
// console.log(jean.firstName);

// // Bracket notation
// console.log(jean['lastName']);

// var x = 'birthYear';
// console.log(jean[x]);

// // Set data to Object
// jean.job = 'Designer';
// jean.isMarried = true;
// console.log(jean);

// // We can create an object also using the object contructor
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane.lastName = "Smith";
// console.log(jane);




/*
==========================================================================
Objects and Methods
==========================================================================
*/

// var jhon = {
//   firstName: 'Jhon',
//   lastName: 'Smith',
//   birthYear: 1999,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'Sotware Developer',
//   isMarried: false,
//   // A function associated with an object is called method
//   calAge: function () {
//       this.age = 2019 - this.birthYear;
//   }
// };

// // Calling the object method
// jhon.calAge();
// console.log(jhon);




// /*****************************
// * CODING CHALLENGE 4
// */

// /*
// Let's remember the first coding challenge where Mark and John compared their BMIs. 
// Let's now implement the same functionality with objects and methods.

// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
// Don't forget they might have the same BMI.

// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
// GOOD LUCK 😀
// */

// var mark = {
//   fullname: 'Mark',
//   mass: 78,
//   height: 1.69,
//   calculateBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//   }
// };

// var jhon = {
//   fullname: 'Jhon',
//   mass: 92,
//   height: 1.95,
//   calculateBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//   }
// };


// mark.calculateBMI();
// jhon.calculateBMI();
// console.log(mark);
// console.log(jhon);

// if (mark.bmi > jhon.bmi) {
//   console.log(mark.fullname + ' has the highest BMI: ' + mark.bmi);
// } else if (jhon.bmi > mark.bmi) {
//   console.log(jhon.fullname + ' has the highest BMI: ' + jhon.bmi);
// } else {
//   console.log(mark.fullname + ' and ' + jhon.fullname + ' have the same BMI: ' + mark.bmi);
// }



/*
==========================================================================
Loops and iteration
==========================================================================
*/

// // For statement
// for (var i = 0; i < 10; i++) {
//   console.log(i); 
// }

// var jhon = ['Jhon', 'Smith', 1990, 'teacher', false];

// for (var i = 0; i < jhon.length; i++) {
//   console.log(jhon[i]);
// }

// // While Statement
// var i = 0;
// while (i < jhon.length) {
//   console.log(jhon[i]);
//   i++;
// }

// // Continue and break Statements
// var jhon = ['Jhon', 'Smith', 1990, 'teacher', false];
// for (var i = 0; i < jhon.length; i++) {
//   if (typeof(jhon[i]) !== 'string') continue;
//   console.log(jhon[i]);
// }

// for (var i = 0; i < jhon.length; i++) {
//   if (typeof(jhon[i]) !== 'string') break;
//   console.log(jhon[i]);
// }

// // Backward Looping
// for (var i = jhon.length - 1; i >= 0; i--) {
//   console.log(jhon[i]);
// }

// /*****************************
// * CODING CHALLENGE 5
// */

// /*
// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
// This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
// John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
// and 10% if the bill is more than $200.

// Implement a tip calculator using objects and loops:

// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 
//   1) a new array containing all tips, and 
//   2) an array containing final paid amounts (bill + tip). 
//   HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

// EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
// Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% 
// if the bill is more than $300 (different than John).

// 5. Implement the same functionality as before, this time using Mark's tipping rules
// 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, 
// and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, 
// divide it by the number of elements in it (that's how you calculate the average)
// 7. Calculate the average tip for each family
// 8. Log to the console which family paid the highest tips on average
// GOOD LUCK 😀
// */

// var john = {
//   bills: [124, 48, 268, 180, 42],
//   tips: [],
//   finalAmount: [],
//   calculateTips: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       this.tips[i] = this.tipCalculator(this.bills[i]);
//       this.finalAmount[i] = this.bills[i] + this.tips[i];
//     }
//   },
//   tipCalculator: function(bill) {
//     if (bill < 50) {
//       return bill * 0.2;
//     } else if (bill >= 50 && bill <= 200) {
//       return bill * 0.15;
//     } else if (bill > 200) {
//       return bill * 0.1;
//     }
//   }
// };

// var mike = {
//   bills: [77, 475, 110, 45],
//   tips: [],
//   finalAmount: [],
//   calculateTips: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       this.tips[i] = this.tipCalculator(this.bills[i]);
//       this.finalAmount[i] = this.bills[i] + this.tips[i];
//     }
//   },
//   tipCalculator: function(bill) {
//     if (bill < 100) {
//       return bill * 0.2;
//     } else if (bill >= 100 && bill <= 300) {
//       return bill * 0.1;
//     } else if (bill > 300) {
//       return bill * 0.25;
//     }
//   }
// };

// function average(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
  
//   return sum / array.length;
// }

// john.calculateTips();
// mike.calculateTips();

// var johnFamilyAverage = average(john.tips);
// var mikeFamilyAverage = average(mike.tips);

// console.log('#### John ####')
// console.log('Bills:', john.bills);
// console.log('Tips:', john.tips);
// console.log('Final Amount:', john.finalAmount);
// console.log('Jhon Family Average:', johnFamilyAverage);

// console.log('\n#### Mike ####')
// console.log('Bills:', mike.bills);
// console.log('Tips:', mike.tips);
// console.log('Final Amount:', mike.finalAmount);
// console.log('Mike Family Average:', mikeFamilyAverage);

// if (johnFamilyAverage > mikeFamilyAverage) {
//   console.log('Jhon\'s Family paid the highest tips on average:', johnFamilyAverage);
// } else if (mikeFamilyAverage > johnFamilyAverage) {
//   console.log('Mike\'s Family paid the highest tips on average:', mikeFamilyAverage);
// } else {
//   console.log('Both Families paid the highest tips on average: ', johnFamilyAverage, mikeFamilyAverage);
// }