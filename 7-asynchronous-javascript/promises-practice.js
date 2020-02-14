/*
==========================================================================
Promises Practice
==========================================================================
*/

function getStockQuote(stock) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    req.open('GET', `http://www.javascripttutorial.net/stock.php?q=${stock}`);

    req.onload = () => {
      req.status === 200 ? resolve(req.response) : reject(req.response);
    };

    req.onerror = () => {
      reject('Error requesting data');
    };
  });
}

let promise = getStockQuote('AAPL');

// Fullfilment and rejection
promise.then(
  price => console.log(error),
  error => console.log(error)
);

// Fullfillment only
promise.then(price => {
  console.log(price);
});

// Rejection Only
promise.then(
  null, 
  error => console.log(error.message)
);

// same as
promise.catch(
  error => console.log(error.message)
);


// Trowing errors on executor

let p = new Promise((resolve, reject) => {
  throw new Error('An error has ocurred');
});

p.catch(error => console.log(error.message));


// Chaining promises

var p1 = new Promise((resolve, reject) => resolve(10));

p1.then()
  .then(() => console.log('Completed'));


// Pass value from one promise ot another

var p2 = new Promise((resolve, reject) => resolve(10));

p2.then(value => value + 10)
  .then(value => console.log(value));


function double(a) {
  console.log('double', a);
  const value = a * 2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a);
    })
  });
}

double(10)
.then(v => double(v))
.then(console.log);