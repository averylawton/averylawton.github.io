function doOnload() {

    const d = new Date();

    document.getElementById("date").innerHTML = d;

    const menu1button = document.querySelector('.menu1');
    const mainnav = document.querySelector('.navigation')

    menu1button.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

}

window.onload = doOnload;


