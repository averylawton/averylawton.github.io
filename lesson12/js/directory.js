const requestURL = 'https://averylawton.github.io/lesson12/js/localshops.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const localbusinesses = jsonObject['localbusinesses'];

    for (let i = 0; i < localbusinesses.length; i++ ) {

let column = document.createElement('div');
column.setAttribute('class', 'col');

let card = document.createElement('section');
let h2 = document.createElement('h2');

h2.textContent = localbusinesses[i].name;

card.appendChild(h2);

document.querySelector('div.wrapper').appendChild(column);
column.appendChild(card);
//________________________________________________________________________________________________________//

let contactinfo = document.createElement('div');

contactinfo.textContent = "Contact Info: " + localbusinesses[i].contactinfo;

card.appendChild(contactinfo);

//________________________________________________________________________________________________________//

let logo = document.createElement('img');

logo.setAttribute('src', localbusinesses[i].logo);
logo.setAttribute('alt', localbusinesses[i].name);


card.appendChild(logo);
//_______________________________________________________________________________________________________//

let link = document.createElement('div');

link.textContent = "Website: ";
let anchor = document.createElement('a');
anchor.setAttribute("href", localbusinesses[i].link);
anchor.textContent = "Website";
link.appendChild(anchor);

logo.setAttribute('src', localbusinesses[i].logo);


card.appendChild(link);

}

});

var wrapper = document.getElementById("wrapper");

document.addEventListener("click", function (event) {
  if (!event.target.matches(".list")) return;

  // List view
  event.preventDefault();
  wrapper.classList.add("list");
});

document.addEventListener("click", function (event) {
  if (!event.target.matches(".grid")) return;

  // List view
  event.preventDefault();
  wrapper.classList.remove("list");
});