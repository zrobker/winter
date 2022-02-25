window.onload = get_year();
window.onload = get_date();
window.onload = get_day_month_year();
window.onload = banner_display();

function get_date() {
    var LastModif = new Date(document.lastModified);
    console.log(LastModif);
    document.getElementById("date").innerHTML = LastModif;
}

function get_year() {
    var date =  new Date().getFullYear();
    console.log(date);
    document.querySelector("#year").innerHTML = date;
}

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function banner_display() {
    
    const message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m"

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    
    console.log(message)
    
    if (day == "Thursday") {
        console.log("It worked")
        document.getElementsByClassName("banner").innerHTML = message;
    } 
    else if (day == "Tuesday"){
        document.getElementsByClassName("banner").innerHTML = message;
    }
}

function get_day_month_year() {
    const datefield = document.querySelector(".date");
    const datefieldUK = document.querySelector("aside");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);
    datefield.innerHTML = `<em>${fulldate}</em>`;
    // broken
    // datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
}