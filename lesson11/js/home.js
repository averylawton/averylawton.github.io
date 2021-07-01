const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towndata = jsonObject['towns'];

    for (let i = 0; i < towndata.length; i++ ) {

      let card = document.createElement('section');
      let infotext = document.createElement('div');
      infotext.setAttribute('class', 'infotext');

      card.appendChild(infotext);
      document.querySelector('div.cards').appendChild(card);

 //*****************************************************town name*******************************************************/     
let h2 = document.createElement('h2');

h2.textContent = towndata[i].name;

infotext.appendChild(h2);

//************************************************motto******************************************************************/

let motto = document.createElement('h4');

motto.textContent = towndata[i].motto;

infotext.appendChild(motto);

//*****************************************************year founded*******************************************************************/

let yearFounded = document.createElement('div');

yearFounded.setAttribute('class', 'yearFounded');

yearFounded.textContent = "Year Founded: " + towndata[i].yearFounded;

infotext.appendChild(yearFounded);

//*************************************************current Population***********************************************************************/

let currentPopulation = document.createElement('div');

currentPopulation.setAttribute('class', 'currentPopulation');

currentPopulation.textContent = "Population: " + towndata[i].currentPopulation;

infotext.appendChild(currentPopulation);

//*************************************************rain fall***********************************************************************/

let averageRainfall = document.createElement('div');

averageRainfall.setAttribute('class', 'averageRainfall');

averageRainfall.textContent = "Annual Rain Fall: " + towndata[i].averageRainfall;

infotext.appendChild(averageRainfall);

//*****************************************************images***************************************************************/

let image = document.createElement('img');

image.setAttribute('src', 'images/' + towndata[i].photo);
image.setAttribute('alt', towndata[i].name);

card.appendChild(image);

    }
  });


	if (localStorage) {
		var lastVisitMessage = "";
		var lastVisit = localStorage.getItem("lastVisit");
		if (lastVisit == null) {
			lastVisitMessage = "This is your first time to our site! Welcome!";
		} else {
			// do some calculations to determine number of days since last visit
			var todaysDate = new Date();
			var numberOfDays = Math.round(
				(todaysDate.getTime() - lastVisit) / (1000 * 60 * 60 * 24)
			);
			lastVisitMessage =
				"Your last visit to our site was " + numberOfDays + " days ago.";
		}

        localStorage.setItem('lastVisit', (new Date()).getTime());
        document.getElementById("lastvisit").innerHTML = `${lastVisitMessage}`;
	}