function doOnload() {
  const d = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(d);
  document.getElementById("date").innerHTML = `${fulldate}`;

  const menu1button = document.querySelector(".menu1");
  const mainnav = document.querySelector(".navigation");

  menu1button.addEventListener(
    "click",
    () => {
      mainnav.classList.toggle("responsive");
    },
    false
  );

  window.onresize = () => {
    if (window.innerWidth > 760) mainnav.classList.remove("responsive");
  };
  //______________________________________ week 5 additions _________________________________________________//

  var now = new Date();
  var dayOfWeek = now.getDay();

  // only show this message if it is Friday (day == 5)
  if (dayOfWeek == 5) {
    // set display property of fridayMessage to block
    document.getElementById("fridayalert").style.display = "visible";
  } else {
    //do not display
    document.getElementById("fridayalert").style.display = "none";
  }

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
  }
}
//________________________________________________________________________________________________________//
window.onload = doOnload;
