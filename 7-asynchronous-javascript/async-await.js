/*
==================================================================================================
Async / Await

The advantage of this is like it looks like synchronous code but it's syncronhous behind the scene
==================================================================================================
*/

// Producing Promises
const getIDs = new Promise((resolve, reject) => {
  // Async Code Here
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
  }, 1500);
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
      const recipe = {title: 'Fresh Tomato Pasta', publisher: 'Jonas'};
      resolve(`${ID}: ${recipe.title}`);
    }, 1500, recID);
  });
};

const getRelated = publisher => {
  console.log(publisher);
  return new Promise((resolve, reject) => {
    setTimeout(publisher => {
      const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
      resolve(`${publisher}: ${recipe.title}`);
    }, 1500, publisher);
  });
};


// Consuming Promises with async / await
// this function runs on the background
// an Async function automatically returns a promise
// The word “async” before a function means one simple thing: a function always returns a promise. 
// Other values are wrapped in a resolved promise automatically.
async function getRecipeAW() {
  // The keyword await makes JavaScript wait until that promise settles and returns its result.
  // We can only use await in an asynchronous function
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const related = await getRelated('Jonas Schemedtmann');
  console.log(related);

  return recipe; // return a promise with a resolved value automatically
}

// we cannot do this because an async function returns a promise
// also the functions runs on the background, so when this code runs the function is still running
const recipe = getRecipeAW();
//console.log(recipe);
// so we should:

getRecipeAW().then(recipe => {
  console.log(`${recipe} is the best ever!`);
});