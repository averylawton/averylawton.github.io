const requestURL = 'js/localshops.json';

//https://averylawton.github.io/lesson12/js/localshops.json

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const localbusinesses = jsonObject['localbusinesses'];

    for (let i = 0; i < localbusinesses.length; i++ ) {

      let card = document.createElement('section');
let h2 = document.createElement('h2');

h2.textContent = localbusinesses[i].name;

card.appendChild(h2);

document.querySelector('div.cards').appendChild(card);
//________________________________________________________________________________________________________//

let contactinfo = document.createElement('div');

contactinfo.textContent = "Contact Info: " + localbusinesses[i].contactinfo;

card.appendChild(contactinfo);

document.querySelector('div.cards').appendChild(card);
//________________________________________________________________________________________________________//

let logo = document.createElement('img');

logo.setAttribute('src', localbusinesses[i].logo);
logo.setAttribute('alt', localbusinesses[i].name);


card.appendChild(logo);

document.querySelector('div.cards').appendChild(card);

}

});