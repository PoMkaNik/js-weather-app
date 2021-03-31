class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.minTemp = document.getElementById('w-min-temp');
    this.maxTemp = document.getElementById('w-max-temp');
    this.wind = document.getElementById('w-wind');
  }

  paint(weatherObj, weather) {
    this.location.textContent = `${weatherObj.city.toUpperCase()}, ${weatherObj.state.toUpperCase()}`;
    this.desc.textContent = `
    ${weather.weather[0].description[0].toUpperCase()}${weather.weather[0].description.slice(
      1,
    )}`;
    this.string.textContent = `${weather.main.temp.toFixed(1)}℃`;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like.toFixed(
      1,
    )}℃`;
    this.minTemp.textContent = `Min Temp:  ${weather.main.temp_min.toFixed(
      1,
    )}℃`;
    this.maxTemp.textContent = `Max Temp: ${weather.main.temp_max.toFixed(1)}℃`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  }
}
