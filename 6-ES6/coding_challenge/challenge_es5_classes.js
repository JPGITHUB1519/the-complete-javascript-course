function Base(name, buildYear) {
  this.name = name;
  this.buildYear = buildYear;
}

Base.prototype.test = function() {
  console.log('Hi I am a tester method');
}

function Park(name, buildYear, trees, area, age) {
  Base.call(this, name, buildYear);
  this.trees = trees;
  this.area = area;
  this.age = age;
}


Park.prototype = Object.create(Base.prototype); // same as Park.prototype = new Base();
// IMPORTANT!, without this our object will be created as a Base() instead of Park(), on Chrome this do not happen
Park.prototype.constructor = Park;

Park.prototype.getTreeDensity = function() {
  return this.trees / this.area;
};

function Street(name, buildYear, size, length) {
  Base.call(this, name, buildYear);
  this.size = size;
  this.length = length;
} 

Street.prototype = Object.create(Base.prototype); // same Street.prototype = new Base();
// IMPORTANT!, without this our object will be created as a Base() instead of Street(), on Chrome this do not happen
Street.prototype.constructor = Street;

Street.prototype.getSizeClassification = function() {
  if (!this.size) return 'normal';

  if (this.size <= 1000) {
    return 'tiny';
  } else if (this.size > 1000 && this.size <= 2000) {
    return 'small';
  } else if (this.size > 2000 && this.size <= 3000) {
    return 'normal';
  } else if (this.size > 3000 && this.size <= 4000) {
    return 'big';
  } else if (this.size > 4000) {
    return 'huge';
  }
};


var park1 = new Park('Park 1', 1990, 2000, 531, 20);

var street1 = new Street('Street1', 1980, 1000, 10000);

console.log(park1);
console.log(street1);
console.log(park1.getTreeDensity());
console.log(street1.getSizeClassification());
