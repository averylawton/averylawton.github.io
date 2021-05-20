
function doOnload() {

   // const d = new Date();

   // document.getElementById("date").innerHTML = d;
//new date not working
   const datefield = document.querySelector(".date");
   const now = new Date();
   const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
   datefield.innerHTML = `${fulldate}`;

    const menu1button = document.querySelector('.menu1');
    const mainnav = document.querySelector('.navigation')

    menu1button.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

}

window.onload = doOnload;


