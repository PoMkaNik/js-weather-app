// init local storage
const storage = new Storage();
// get data from local storage
const { city, state } = storage.getLocationData();
// init weather obj
const weather = new Weather(city, state);
// init ui obj
const ui = new UI();

const getWeather = function () {
  weather
    .getWeather()
    .then((res) => ui.paint(weather, res))
    .catch((err) => console.log(err));
};

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
const modal = new bootstrap.Modal(document.getElementById('locModal'));

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  e.preventDefault();

  let city = document.getElementById('city');
  let state = document.getElementById('state');

  // get weather for new location
  weather.changeLocation(city.value, state.value);

  // save location in local storage
  storage.setLocationData(city.value, state.value);

  // display weather for new location in UI
  getWeather();

  // cleat the fields
  city.value = '';
  state.value = '';

  // close the modal
  modal.hide();
});

// weather.changeLocation('Los Angeles', 'CA');
