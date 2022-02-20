/* Theme toggle */
const themeIcon = document.querySelector('.theme-icon');
const themeStyle = document.querySelector('.themestyle');
themeIcon.onclick = () => {
        if (themeStyle.href.match("https://deploy-preview-5--card-input.netlify.app/darktheme.css")) {
            themeStyle.setAttribute("href",
                "https://deploy-preview-5--card-input.netlify.app/lighttheme.css");
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else if (themeStyle.href.match("https://deploy-preview-5--card-input.netlify.app/lighttheme.css")) {
            themeStyle.setAttribute("href", "https://deploy-preview-5--card-input.netlify.app/darktheme.css");
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

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