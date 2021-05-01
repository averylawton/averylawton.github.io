
function updateDates() {

    const d = new Date();

    const currentYear = d.getFullYear();

    const modified = document.lastModified

    document.getElementById('lastmod').textContent = modified;
    document.querySelector('#currentYear').textContent = currentYear;
}

window.onload = updateDates;
