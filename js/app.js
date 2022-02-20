/* Theme toggle */
const themeStyle = document.querySelector('.themestyle');
let activeSheet = document.querySelector("#active-stylesheet");
let themeToggle = document.querySelector(".theme-toggle");
let themeIcon = document.querySelector('.theme-toggle i');

if (localStorage.getItem("lastActiveSheet")) {
    activeSheet.setAttribute("href", localStorage.getItem("lastActiveSheet"));
}

function switchStyle() {
    let selectedSheet = this.getAttribute("data-stylesheet");
    console.log(selectedSheet);
    if (selectedSheet === "https://deploy-preview-5--card-input.netlify.app/lighttheme.css") {
        selectedSheet = "https://deploy-preview-5--card-input.netlify.app/darktheme.css";
    } else {
        selectedSheet = "https://deploy-preview-5--card-input.netlify.app/lighttheme.css";
    }
    this.setAttribute("data-stylesheet", selectedSheet);
    activeSheet.setAttribute("href", selectedSheet);
    localStorage.setItem("lastActiveSheet", selectedSheet);
    if(themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    else{
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// for (let i = 0; i < themeIcons.length; i++) {
//     themeIcons[i].addEventListener("click", switchStyle);  
// }

themeToggle.addEventListener('click', switchStyle);

/* JS for closing components */
const elements = document.querySelectorAll(".component-close");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", (e) => {
        e.target.parentElement.parentElement.style.display = "none";
    });
}

/*Smooth scrolling */
const scrollButton = document.querySelector(".doc-float");
scrollButton.addEventListener("click", (e) => {
    // e.preventDefault();
    document.querySelector("#top-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Navigation
const navigate = () => {
    const burger = document.querySelector('.burger');
    const navLeft = document.querySelector('.navigation-left');
    const navRight = document.querySelector('.navigation-right');
    const navFull = document.querySelector('.navigation-full');

    burger.addEventListener('click', () => {
        if (navLeft) {
            navLeft.classList.toggle('navigation-left--active');
        } else if (navRight) {
            navRight.classList.toggle('navigation-right--active');
        } else if (navFull) {
            navFull.classList.toggle('navigation-full--active');
        }
        burger.classList.toggle('rotate');
    })

}

navigate();