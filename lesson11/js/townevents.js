const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {

    const towns = jsonObject['towns'];

    // get the town name from the townname div

    var townname = document.querySelector('#townname').innerHTML;
    // put it in a variable

    for (let i = 0; i < towns.length; i++ ) {

        // get the town name from the JSON and put it in variable
        let townnameValue = towns[i].name;
        // if the div townname matches the json townname, then get the events, else continue
        if (townname == townnameValue) {

            let events = document.querySelector('#townevents');

            let eventsList = towns[i].events;

            if (eventsList != null && eventsList.length > 0) {                

                for (let j = 0; j < eventsList.length; j++) {
                    let eventElement = document.createElement('div');
                    eventElement.textContent = eventsList[j];
                    eventElement.setAttribute("class", "event");
                    events.appendChild(eventElement);
                }
    
            } else {
                // handle no events scenario
                // TODO
            }


        }
    }
  });