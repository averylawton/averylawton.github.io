const weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=405e35a9857a939685eb2aa43e7679ae&units=imperial";

fetch(weatherAPIURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const main = jsObject['main'];
    const wind = jsObject['wind'];

    document.querySelector('#currentTemp').innerHTML = main.temp;
    document.querySelector('#highTemp').innerHTML = main.temp_max;
    document.querySelector('#lowTemp').innerHTML = main.temp_max;
    document.querySelector('#humidity').innerHTML = main.humidity;
    document.querySelector('#windSpeed').innerHTML = wind.speed;
    
  });


  const forecastAPIURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=405e35a9857a939685eb2aa43e7679ae&units=imperial";

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  fetch(forecastAPIURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
        const forecastList = jsObject['list'];

        var dayCounter = 0;
        forecastList.forEach(
            element => {
                var dateText = element.dt_txt;
                console.log(dateText);

                if (dateText != undefined && dateText != null && dateText.includes("18:00")) {
                    dayCounter++;
                    var forecastDate = new Date(dateText);
                    var dayName = days[forecastDate.getDay()];
                    var temp = Math.round(element.main.temp);
                    var weatherIconValue = element.weather[0].icon;
                    var weatherIconURL = "http://openweathermap.org/img/wn/" + weatherIconValue + "@2x.png";

                    document.querySelector("#dayOfWeek" + dayCounter).innerHTML = dayName;
                    document.querySelector("#forecastimg" + dayCounter).setAttribute("src", weatherIconURL);
                    document.querySelector("#forecastTemp" + dayCounter).innerHTML = temp;

                }
            }
        );

        
                

    });
