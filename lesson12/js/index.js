const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lon=-97.733330&lat=30.266666&appid=405e35a9857a939685eb2aa43e7679ae&exclude=hourly,minutely&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);



    const current = jsObject['current'];

    document.querySelector("#currentCondition").innerHTML = current.weather[0].main;
    document.querySelector("#currentTemp").innerHTML = current.temp;
    document.querySelector("#humidity").innerHTML = current.humidity;

    // get alerts
    const alertsList = jsObject['alerts'];

    alertsList.forEach((element) => {
      var eventText = element.event;
      var descriptionText = element.description;

      console.log(eventText);
      console.log(descriptionText);

      document.querySelector("#weatheralert").innerHTML += "<b>" + eventText + "</b><br><br>" + descriptionText + "<br>";

    });    



    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dailyList = jsObject["daily"];

    for (var dayCounter = 1; dayCounter <= 3; dayCounter++) {
      var dateUTCSeconds = dailyList[dayCounter].dt;
      console.log(dateUTCSeconds);

      var forecastDate = new Date(0);
      forecastDate.setUTCSeconds(dateUTCSeconds);

      console.log(forecastDate.getFullYear());
      var dayName = days[forecastDate.getDay()];
      console.log(forecastDate.getDay());
      var temp = Math.round(dailyList[dayCounter].temp.day);
      var weatherIconValue = dailyList[dayCounter].weather[0].icon;
      var weatherIconURL =
        "http://openweathermap.org/img/wn/" + weatherIconValue + "@2x.png";

      document.querySelector("#dayOfWeek" + dayCounter).innerHTML = dayName;
      document
        .querySelector("#forecastimg" + dayCounter)
        .setAttribute("src", weatherIconURL);
      document.querySelector("#forecastTemp" + dayCounter).innerHTML = temp;
      var weatherDescription = dailyList[dayCounter].weather.main;
      // use the daily description 
      // TODO
    

    }

    
  });


  function Hide(HideID) 
{
  HideID.style.display = "none"; 
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("municipalityimgs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
} 
