
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=405e35a9857a939685eb2aa43e7679ae&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);



    const main = jsObject['main'];
    const weather = jsObject['weather'];

    document.querySelector('#current-temp').innerHTML = main.temp;
    
  });