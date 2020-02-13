/*
==========================================================================
Asynchronous Javascript Example
==========================================================================
*/

const second = () => {
  setTimeout(() => {
    console.log('Async Hey there');
  }, 2000);
};

const first = () => {
  console.log('Hey There');
  second();
  console.log('The end');
};

first();