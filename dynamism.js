country = document.querySelector("input");
gobalWeather = document.querySelector("span");
description = document.querySelector("header");
pressure = document.getElementById("pressure");
humidity = document.getElementById("humidity");
visibility = document.getElementById("visibility");
url = "http://api.openweathermap.org/geo/1.0/direct?q=p&limit=5&appid=a7a8d8a744ef7ea7908bc98841fa2bec";

fetch(url).then((answer) => console.log(answer));
