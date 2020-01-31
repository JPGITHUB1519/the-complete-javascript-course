/*
==========================================================================
ES6 Rest Parameters
==========================================================================
*/

// // ES5

// function isFullAge5() {
//   console.log(arguments);
//   var argsArr = Array.prototype.slice.call(arguments);

//   argsArr.forEach(function(cur) {
//     console.log((2016 - cur) >= 18);
//   });
// }

// // ES6

// function isFullAge6(...years) {
//   years.forEach(cur => console.log((2016 - cur) >= 18));
// }

// isFullAge5(1990, 1999, 1965, 2018);
// isFullAge6(1990, 1999, 1965, 2018);



// ES5

function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= limit);
  });
}

// ES6

function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log((2016 - cur) >= limit));
}

//isFullAge5(21, 1990, 1999, 1965, 2018);
isFullAge6(21, 1990, 1999, 1965, 2018);