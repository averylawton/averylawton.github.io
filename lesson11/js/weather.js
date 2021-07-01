function windChill(tempF, speed) {
  //f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
  return Math.round(
    35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * (tempF * Math.pow(speed, 0.16))
  );
}
var cityID = document.querySelector("#cityID").innerHTML;

const weatherAPIURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=405e35a9857a939685eb2aa43e7679ae&units=imperial";

fetch(weatherAPIURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const main = jsObject["main"];
    const wind = jsObject["wind"];
    const weather = jsObject["weather"];

    document.querySelector("#currentCondition").innerHTML = weather[0].main;
    document.querySelector("#currentTemp").innerHTML = main.temp;
    document.querySelector("#highTemp").innerHTML = main.temp_max;
    document.querySelector("#lowTemp").innerHTML = main.temp_max;
    document.querySelector("#humidity").innerHTML = main.humidity;
    document.querySelector("#windSpeed").innerHTML = wind.speed;
    
    // Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F)
    // and wind speeds above 4.8 kilometers per hour (3.0 mph).
    if (main.temp <= 50 && wind.speed > 3) {
      document.getElementById("windChill").innerHTML = windChill(main.temp, wind.speed);
    } else document.getElementById("windChill").innerHTML = "-";

  });


const forecastAPIURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=405e35a9857a939685eb2aa43e7679ae&units=imperial";

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

fetch(forecastAPIURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const forecastList = jsObject["list"];

    var dayCounter = 0;
    forecastList.forEach((element) => {
      var dateText = element.dt_txt;
      console.log(dateText);

      if (
        dateText != undefined &&
        dateText != null &&
        dateText.includes("18:00")
      ) {
        dayCounter++;
        var forecastDate = new Date(dateText);
        var dayName = days[forecastDate.getDay()];
        var temp = Math.round(element.main.temp);
        var weatherIconValue = element.weather[0].icon;
        var weatherIconURL =
          "http://openweathermap.org/img/wn/" + weatherIconValue + "@2x.png";

        document.querySelector("#dayOfWeek" + dayCounter).innerHTML = dayName;
        document
          .querySelector("#forecastimg" + dayCounter)
          .setAttribute("src", weatherIconURL);
        document.querySelector("#forecastTemp" + dayCounter).innerHTML = temp;
      }

    });
  });