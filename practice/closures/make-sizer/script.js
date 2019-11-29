/*
==========================================================================
Make Sizer Example
==========================================================================
*/

var size12DOM = document.getElementById('size12');
var size14DOM = document.getElementById('size14');
var size16DOM = document.getElementById('size16');

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  }
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

size12DOM.addEventListener('click', size12);
size14DOM.addEventListener('click', size14);
size16DOM.addEventListener('click', size16);