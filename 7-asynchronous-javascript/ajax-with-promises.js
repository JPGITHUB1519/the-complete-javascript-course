/*
==========================================================================
Ajax With Promises
==========================================================================
*/

function getWeather(woeid) {
  // fetch returns a promise
  fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`, {headers: { "X-Requested-With": "xhr" }})
  .then(result => {
    console.log(result);
    // converts data to json
    return result.json(); // returns a promise
  })
  .then(data => {
    console.log(data);
    const today = data.consolidated_weather[0];
    console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
  })
  .catch(error => console.log(error));
}


getWeather(44418);
getWeather(2487956);

