var formatNumber = function(num, type) {
  /*
    + or - before number
    exactly 2 decimal points
    comma separating the thousands

    2310.4567 -> 2,310.46
    2000 -> 2,000.00
  */  

  var numSplit;
  var int;
  var dec;
  
  num = Math.abs(num);
  num = num.toFixed(2);

  numSplit = num.split('.');
  int = numSplit[0];
  dec = numSplit[1];

  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
  }

  return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;  
};

var nodeListForEach = function(list, callback) {
  for (var i = 0; i < list.length; i++) {
    callback(list[i], i);
  }
};

export { formatNumber, nodeListForEach };
