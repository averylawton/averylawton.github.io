function doOnload() {

    const d = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(d);
    document.getElementById("date").innerHTML = `${fulldate}`;

    const menu1button = document.querySelector('.menu1');
    const mainnav = document.querySelector('.navigation');
    
    menu1button.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

}
//________________________________________________________________________________________________________//
window.onload = doOnload;

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}