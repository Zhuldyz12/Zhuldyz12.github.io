function writeCurrentYear(){
    let currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerHTML = `Almaty - ${currentYear}`;
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classlist.remove("active");
}))

const imageNames = [
    'alua.png',
    'back_school.png',
    'football.png',
    'got_talent.png',
    'got_talent_1.png',
    'museum.png',
    'new_students.png',
    'republic.png',
    'wsc.png',
]
let galery = document.getElementById("gallery")

const loadImages = () => {
    let currentRow = -1
    for (let i = 0; i < imageNames.length; i++) {
        if (i % 3 === 0) {
            row = document.createElement("div")
            row.classList.add("row")
            galery.appendChild(row)
            ++currentRow
        }
        row = galery.getElementsByClassName("row")[currentRow]
        col = document.createElement("div")
        col.classList.add("col-xs-8")
        col.classList.add("col-sm-4")
        // col.classList.add("float")
        row.appendChild(col)
        img = document.createElement("img")
        img.setAttribute(
            'src',
            `/images/posts/${imageNames[i]}`
        )
        img.classList.add("square")
        col.appendChild(img)
    }
}