var now = new Date();
var dayOfWeek = now.getDay();

// only show this message if it is Friday (day == 5)
if (dayOfWeek == 5) {
    // set display property of fridayMessage to block 
    document.getElementById("fridayalert").style.display = "visible";
}
else {
    //do not display
    document.getElementById("fridayalert").style.display = "none";
}
//_________________________________________________________________________________________________________//
