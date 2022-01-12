let oLastModif = new Date(document.lastModified);
document.getElementById("date").innerHTML = oLastModif;
console.log(oLastModif);

window.onload = get_year();

function get_year() {
    let date =  new Date().getFullYear();
    console.log(date);
    document.querySelector("#year").innerHTML = date;
};