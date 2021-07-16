const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lon=-97.733330&lat=30.266666&appid=405e35a9857a939685eb2aa43e7679ae&exclude=hourly,minutely&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);



    const main = jsObject['main'];
    const weather = jsObject['weather'];

    document.querySelector('#current-temp').innerHTML = main.temp;
    
  });