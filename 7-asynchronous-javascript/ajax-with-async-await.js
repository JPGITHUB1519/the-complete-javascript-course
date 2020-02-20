/*
==========================================================================
AJAX Calls with Fetch and Async/Await
==========================================================================
*/

// Also we are returning data from a AJAX call, nice!
async function getWeatherAW(woeid) {
  try {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`, {headers: { "X-Requested-With": "xhr" }});
    const data = await result.json();
    console.log(data);
    const tomorrow = data.consolidated_weather[1];
    console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);
    
    return data; // returns a promise with the resolved data
  } catch(error) {
    console.log(error);
  }
}

getWeatherAW(44418);

let sanFranciscoData;

getWeatherAW(2487956).then(data => {
  sanFranciscoData = data;
  console.log(sanFranciscoData);
})
