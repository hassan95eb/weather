const btnSearch = document.querySelector(".btn-search");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var searchCity = document.querySelector(".search-city").value;
  let textUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=ce46aa5a385149f4107a0e53d9cf4b00`;

  var weatherRequest = new XMLHttpRequest();
  weatherRequest.open("GET", textUrl);

  weatherRequest.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      weatherResult(this.response);
    }
  };

  weatherRequest.send();
});

function weatherResult(data) {
  data = JSON.parse(data);
  console.log(data);

  weatherCity = data.weather[0];
  console.log(weatherCity);

  cityName = data.name;
  console.log(cityName);

  cityDescription = data.weather[0].description;
  console.log(cityDescription);

  cityIcon = data.weather[0].icon;
  console.log(cityIcon);

  temperatureCity = data.main.temp;
  console.log(temperatureCity);

  humidityCity = data.main.humidity;
  console.log(humidityCity);

  document.querySelector(".weather-name").innerHTML = data.name;
  document.querySelector(".weather-description").innerHTML = cityDescription;
  document.querySelector(".weather-temp").innerHTML =
    Math.round(parseInt(data.main.temp) - 273.15) + "°C";
  document.querySelector(".weather-humidity").innerHTML =
    data.main.humidity + "%";
}
