import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';


/** Global State of the app
 * - Search object
 * - Current Recipe Object
 * - Shopping list object
 * - Like recipes
 */
const state = {

};

/**
 * Search Controller
 */
const controlSearch = async () => {
  // 1) Get query from the view
  const query = searchView.getInput();

  if (query) {
    // 2) New search object and add state
    state.search = new Search(query);

    // 3) Prepare the UI
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
      // 4) Search for recipes
      await state.search.getResults();

      // 5) render results on the UI
      console.log(state.search.result);
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch(err) {
      clearLoader();
      alert('Something went wrong with the search...');
    }
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

// Event delegation
elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

/**
 * Recipe Controller
 */

const controlRecipe = async () => {
  // Get ID from url
  const id = window.location.hash.replace('#', '');

  if (id) {
    // Prepare UI from changes

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data
      await state.recipe.getRecipe();

      // Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe
      console.log(state.recipe);
    } catch(err) {
      alert('Error processing recipe!');
    }
  }
  console.log(id);
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));