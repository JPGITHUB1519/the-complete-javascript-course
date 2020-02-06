/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Base {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Base {
  constructor(name, buildYear, trees, area, age) {
    super(name, buildYear);
    this.trees = trees;
    this.area  = area;
    this.age = age;
  }

  getTreeDensity() {
    return this.trees / this.area;
  }
}


class Street extends Base {  
  constructor(name, buildYear, size, length) {
    super(name, buildYear);
    this.size = size;
    this.length = length;
  }

  // Getter
  get sizeClassification() {
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
  }
}

// Parks helper Functions
const getParksTreeDensity = (parks = []) => {
  let densities = [];

  for (const park of parks) {
    densities.push({name: park.name, treeDensity: park.getTreeDensity()});
  }

  return densities;
};

const getAverageParkAges = (parks = []) => {
  let totalAge = parks.reduce((accumulator, park) => accumulator + park.age , 0);

  if (parks.length > 0) {
    return totalAge / parks.length;
  }

  return 0;
};

const getParksWithMoreThanThouseTrees = (parks = []) => {
  return parks.filter(park => park.trees > 1000);
};

// Streets Helper methods
const getTotalStreetLength = (streets = []) => {
  return streets.reduce((accumulator, street) => accumulator + street.length, 0);
};

const getAverageStreetLength = (streets = []) =>  {
  if (streets.length > 0) {
    return getTotalStreetLength(streets) / streets.length;
  }

  return 0;
};


// Make report function
const generateReport = (data) => {
  if (!data) {
    console.error('Missing report data');
    return;
  } else {
    if (!data.parks && !data.streets) {
      console.log('Missing parks and streets data');
      return;
    }
    
    if (!data.parks) {
      console.log('Missing Parks data');
      return;
    }
    if (!data.streets) {
      console.log('Missing Streets data');
      return
    }
  }
  
  let parks = data.parks;
  let streets = data.streets;
  let parkTreeDensityData = getParksTreeDensity(parks);
  let averageParkAges = getAverageParkAges(parks);
  let parksWithMoreThanThouseTrees = getParksWithMoreThanThouseTrees(parks);
  let totalStreetLength = getTotalStreetLength(streets);
  let averageStreetLength = getAverageStreetLength(streets);

  console.log('########## End of year Report ##########\n');

  console.log(`Total Number of parks: ${parks.length}`);
  console.log(`Total Number of streets: ${streets.length}\n`);

  console.log('1- Tree Density of each park');
  if (parkTreeDensityData) {
    for (let park of parkTreeDensityData) {
      console.log(`Name: ${park.name}`);
      console.log(`Density: ${park.treeDensity}`);
      console.log('\n');
    }
  }

  console.log(`2- Average age of each town's park: ${averageParkAges}\n`);
  console.log('3- The names of the park that has more than 1000 trees');
  parksWithMoreThanThouseTrees.forEach(park => console.log(park.name));

  console.log(`\n4- Total length of the town's streets: ${totalStreetLength}`);
  console.log(`\n4- Average length of the town's streets: ${averageStreetLength}`);
  console.log('\n5- Classification of all Streets\n');

  streets.forEach(street => {
    console.log(`Name: ${street.name}`);
    console.log(`Classification: ${street.sizeClassification}\n`)
  });
};

const init = () => {
  generateReport(data);
};

let data = {
  parks: [
    new Park('Lago Enriquillo e Isla Cabritos', 1998, 500, 631, 10),
    new Park('Sierra de bahoruco', 1999, 800, 700, 20),
    new Park('Los haitises', 2000, 3000, 800, 50),
  ],
  streets: [
    new Street('Calle El Conde', 2010,  1000, 1000),
    new Street('Calle Las Damas', 2011,  2000, 2000),
    new Street('Calle Del Sol', 2012,  3000, 3000),
    new Street('Calle 27 de Febrero', 2013,  4000, 4000),
  ]
};

init();

// data.streets.forEach(street => {
//   console.log(street.getSizeClassification());
// });

// data.parks.forEach(cur => {
//   console.log(cur.getTreeDensity());
// });
// averageParkAges(data.parks);
// console.log(parksTreeDensity(data.parks));
// console.log(getParksWithMoreThanThouseTrees(data.parks));
// console.log(totalStreetLength(data.streets));

// const park1 = new Park('Lago Enriquillo e Isla Cabritos', 1998, 500, 631, 10);
// const park2 = new Park('Sierra de bahoruco', 1999, 800, 700, 20);
// const park3 = new Park('Los haitises', 2000, 3000, 800, 50);


// const street1 = new Street('Calle El Conde', 2010,  1000, 1000);
// const street2 = new Street('Calle Las Damas', 2011,  2000, 2000);
// const street3 = new Street('Calle Del Sol', 2012,  3000, 3000);
// const street4 = new Street('Calle 27 de Febrero', 2013,  4000, 4000);