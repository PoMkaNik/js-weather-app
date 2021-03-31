class Weather {
  constructor(city, state) {
    this.apiKey = '98fc5398cf4be01615b15a2c37a7abe3';
    this.city = city.toLowerCase();
    this.state = state.toLowerCase();
  }

  async getWeather() {
    try {
      const response = await fetch(`
      http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},us&units=metric&appid=${this.apiKey}`);
      // http://api.openweathermap.org/data/2.5/weather?q=boston,ma,us&appid=98fc5398cf4be01615b15a2c37a7abe3

      const responseData = await response.json();

      return responseData;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  changeLocation(city, state) {
    this.city = city.toLowerCase();
    this.state = state.toLowerCase();
  }
}
