/*
==========================================================================
Local Storage
==========================================================================
*/

localStorage.setItem('name', 'Jean');

var name = localStorage.getItem('name');

console.log(name);
//localStorage.removeItem('name');


// #### Save Objects #####

var object = {
    name: 'Jean',
    age: 21,
    profession: 'Software Engineer'
};

localStorage.setItem('data', JSON.stringify(object));

var data = JSON.parse(localStorage.getItem('data'));
console.log(data);