function doOnload() {
	const d = new Date();
	const fulldate = new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
	}).format(d);
	document.getElementById("date").innerHTML = `${fulldate}`;


    if (localStorage) {
		var lastVisitMessage = " ";
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
        document.getElementById("lastVisit").innerHTML = `${lastVisitMessage}`;
	}

}
window.onload = doOnload;