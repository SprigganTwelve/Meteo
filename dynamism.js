var country = document.querySelector("input");
var gobalWeather = document.querySelectorAll("span");
var today = document.querySelector("header");
var pressure = document.getElementById("pressure");
var humidity = document.getElementById("humidity");
var visibility = document.getElementById("visibility");
var img = document.querySelector("img");
var coord = {};

country.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    var tab = country.value.split("/");

    var geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + tab[0] + "&limit=5&appid=a7a8d8a744ef7ea7908bc98841fa2bec";

    fetch(geoUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let lower = tab[1].toLowerCase();
        console.log(lower);
        data.forEach((location) => {
          let locationStateLowerCase = location.state.toLowerCase();
          console.log("locationStateLowerCase: ", locationStateLowerCase, " lower: ", lower);
          if (locationStateLowerCase === lower) {
            coord.lat = location.lat;
            coord.lon = location.lon;
          }
        });

        var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + coord.lat + "&lon=" + coord.lon + "&appid=a7a8d8a744ef7ea7908bc98841fa2bec";

        fetch(weatherUrl)
          .then((weatherResponse) => {
            return weatherResponse.json();
          })
          .then((weatherData) => {
            console.log("Weather data : ", weatherData);
            console.log("html element: ", gobalWeather);
            visibility.innerHTML = `Visibility <br/> ${weatherData.visibility}`;
            pressure.innerHTML = `Pressure <br/> ${weatherData.main.pressure}`;
            humidity.innerHTML = `Humidity <br/> ${weatherData.main.humidity}`;
            gobalWeather[0].innerHTML = `${weatherData.weather[0].description}`;
            gobalWeather[1].innerHTML = `${weatherData.wind.deg} °`;
            gobalWeather[2].innerHTML = `${weatherData.main.temp} `;
          })
          .catch((weatherError) => {
            console.error("Erreur dans la deuxième fetch :", weatherError);
          });
      })
      .catch((error) => {
        console.error("Erreur dans la première fetch :", error);
      });
  }
});

// var tomorrow = document.querySelector("#days");
// tomorrow.addEventListener("click", () => {
//   const forcastUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + coord.lat + "&lon=" + coord.lon + "&appid=a7a8d8a744ef7ea7908bc98841fa2bec";
//   console.log(forcastUrl);
//   fetch(forcastUrl)
//     .then((promise) => {
//       return promise.json();
//     })
//     .then((data) => {
//       console.log("forcast on 5 days: ", data);
//     });
// });

//// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
