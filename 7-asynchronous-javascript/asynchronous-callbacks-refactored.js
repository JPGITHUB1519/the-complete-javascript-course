/*
==========================================================================
Callback Hell refactored

Tips from: http://callbackhell.com/
==========================================================================
*/


function getRecipe(callback) {
  setTimeout(() => {
    const recipeIDs = [523, 883, 432, 974];

    if (callback && typeof callback === 'function') {
      callback(recipeIDs[2], getRecipeByPublisher);
    }
  }, 1500);

}

function getRecipeById(id, callback) {
  setTimeout(id => {
    const recipe = {title: 'Fresh Tomato pasta', publisher: 'Jonas'};
    console.log(`${id}: ${recipe.title}`);
    if (callback && typeof callback === 'function') {
      callback(recipe.publisher);
    }
  }, 1500, id);
}

function getRecipeByPublisher(publisher, callback) {
  setTimeout(publisher => {
    const recipe2 = {title: 'Italian Pizza', publisher: publisher};
    console.log(recipe2);
    if (callback && typeof callback === 'function') {
      callback();
    }
  }, 1500, publisher);
}


getRecipe(getRecipeById);