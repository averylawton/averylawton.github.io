function updateDates() {

    const d = new Date();

    const currentYear = d.getFullYear();

    const modified = document.lastModified

    document.getElementById('lastmod').textContent = modified;
    document.querySelector('#currentYear').textContent = currentYear;
}

window.onload = updateDates;


const menu1button = document.querySelector('.menu1');
const mainnav = document.querySelector('.navigation')

menu1button.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};