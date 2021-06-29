const imgs = document.querySelectorAll('[data-src]');

function preloadImg(img) {
	const src = img.getAttribute("data-src");
	if (!src) {
		return;
	}

	img.src = src;
}

const imgOptions = {
	threshold: 0,
	//rootMargin: buildThresholdList()
	rootMargin: "0px 0px -300px 0px"
};

const imgObserver = new IntersectionObserver((entries,
	imgObserver) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		} else {
			preloadImg(entry.target);
			entry.target.classList.remove('out-view');
			entry.target.classList.add('in-view');
			imgObserver.unobserve(entry.target);
		}
	});
}, imgOptions);

imgs.forEach(image => {
	imgObserver.observe(image);
});



//_________________________________________________________________________________________________________//

if (localStorage) {
    var lastVisitMessage = "";
    var lastVisit = localStorage.getItem('lastVisit');
    if (lastVisit == null) {
        lastVisitMessage = "This is your first time to our site! Welcome!";
    }
    else {
        // do some calculations to determine number of days since last visit
        var todaysDate = new Date();
        var numberOfDays = Math.round((todaysDate.getTime() - lastVisit) / (1000*60*60*24));
        lastVisitMessage = "Your last visit to our site was " + numberOfDays + " days ago."; 
    } 
  
    
  }