const requestURL = 'https://averylawton.github.io/lesson12/js/localshops.json';

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

//_______________________________________________________________________________________________________//

let link = document.createElement('div');

link.textContent = "Contact Info: " + localbusinesses[i].link;

logo.setAttribute('src', localbusinesses[i].logo);


card.appendChild(link);

document.querySelector('div.cards').appendChild(card);

}

});

 // Get the elements with class="column"
 var elements = document.getElementsByClassName("column");

 // Declare a loop variable
 var i;

 // List View
 function listView() {
   for (i = 0; i < elements.length; i++) {
     elements[i].style.width = "100%";
   }
 }

 // Grid View
 function gridView() {
   for (i = 0; i < elements.length; i++) {
     elements[i].style.width = "50%";
   }
 }

 /* Optional: Add active class to the current button (highlight it) */
 var container = document.getElementById("btnContainer");
 var btns = container.getElementsByClassName("btn");
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function () {
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
   });
 }