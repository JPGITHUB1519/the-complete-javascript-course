/*
==========================================================================
Promises
==========================================================================
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

// the then method resolve two callbacks, the first is when the promise is resolved and the other when is rejected
// getIDs
// .then(IDs => {
//   console.log(IDs);
// },

// error => {
//   console.log('error');
//   console.log(error);
// });

// Consuming Promises
getIDs
.then(IDs => {
  console.log(IDs);
  // bad practice, we can chain instead
  // getRecipe(IDs[2]).then(value => console.log(value));

  // this will return and promise then we can chain
  return getRecipe(IDs[2]);
})
.then(recipe => {
  // chaining
  console.log(recipe);
  return getRelated('Jonas');
})
.then(recipe => {
  console.log(recipe);
})
.catch(error => {
  console.log('error');
  console.log(error)
});
