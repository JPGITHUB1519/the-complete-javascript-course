import Search from './models/Search';


/** Global State of the app
 * - Search object
 * - Current Recipe Object
 * - Shopping list object
 * - Like recipes
 */
const state = {

};

const controlSearch = async () => {
  // 1) Get query from the view
  const query = 'pizza'; // TODO

  if (query) {
    // 2) New search object and add state
    state.search = new Search(query);

    // 3) Prepare the UI

    // 4) Search for recipes
    await state.search.getResults();

    // 5) render results on the UI
    console.log(state.search.result);
  }
};

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();

