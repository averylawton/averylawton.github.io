
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {

    let myChapter = input.value;

    // check if input is not blank
    if (myChapter == null || myChapter == "") {
      return;
    }
    
    // a. create an li element
    const listItem = document.createElement('li');

    // b. create a delete button
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    // c. populate the li elements textContent or innerHTML with the input
    listItem.appendChild(listText);
    listText.textContent = myChapter;
    
    // d. populate the button textContent with a red X 
    listBtn.textContent = '\u274C';

    // e. append the li element with the delete button
    listItem.appendChild(listBtn);

    // f. append the list element with the li element just created and appended with text and the delete button
    list.appendChild(listItem);

    // g. add an event listener to the delete button that removes the li element when clicked
    listBtn.onclick = function(e) {
      list.removeChild(listItem);
    }

    // h. send the focus to the input element
    input.focus();

    // i. clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
    input.value = '';

  }