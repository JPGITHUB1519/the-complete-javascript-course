// App Controller

// default import
import str from './models/Search';

// name import
import { add as sum, multiply, ID } from './views/searchView';

import * as searchView from './views/searchView';

console.log(str);
console.log(sum(2, 3));
console.log(ID);

console.log(`Using exported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}, ${str}`)