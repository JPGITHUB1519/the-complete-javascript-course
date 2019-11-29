/*
==========================================================================
Closure Basic Example
==========================================================================
*/

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myfunc = makeFunc();
myfunc();