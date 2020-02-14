/*
Suppose you have to read a list of products from a data source, add a tax amount to each item, and calculate the total. 
The following illustrates how to use promise chaining in this case.
*/

const items = [
  {
    name: 'Phone',
    qty: 1,
    price: 500
  },
  {
    name: 'Scree Protector',
    qty: 2,
    price: 10
  }
];

const tax = 0.1;

function readData() {
  return new Promise((resolve, reject) => {
    console.log('Reading data from the datasource...');

    // Simulating reading data from a datasource
    setTimeout(() => {
      resolve(items);
    }, 300);
  });
}

function addTax(items) {
  console.log('Calculate Tax...');
  return items.map(item => {
    const name = item.name;
    const qty = item.qty;
    const price = item.price * (1 + tax);
    return { name, qty, price};
  });
}

function calculateTotal(items) {
  // calculate total
  console.log('Calculate total...');

  const total = items.reduce((p, c) => {
    return p + c.qty * c.price;
  }, 0);

  return total;
}

// chaining items
// readData()
//   .then(items => items)
//   .then(items => addTax(items))
//   .then(items => calculateTotal(items))
//   .then(total => console.log(total));

// Chaining items short way

readData()
  .then(addTax) // with functions that accepts only one value we can pass the function only without making a call
  .then(calculateTotal)
  .then(console.log)
// console.log(calculateTotal(items));