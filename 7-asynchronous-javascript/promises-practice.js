/*
==========================================================================
Promises Practice
==========================================================================
*/

function getStockQuote(stock) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    req.open('GET', 'http://www.javascripttutorial.net/stock.php?q=' + stock);

    req.upload = () => {
      req.status === 200 ? resolve(req.stock) : reject(req.stock); 
    };

    req.onerror = function() {
      reject(Error('Error requesting data'));
    };

    req.send();
  });
}

let promise = getStockQuote('AAPL');

promise.then(
  price => console.log(price);
  error => console.log(error.message);
);