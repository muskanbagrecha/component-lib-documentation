/* Theme toggle */
const themeIcon = document.querySelector('.theme-icon');
const themeStyle = document.querySelector('.themestyle');
themeIcon.onclick = () => {
    if (themeStyle.href.match("https://badge-button.netlify.app/lighttheme.css")) {
        themeStyle.setAttribute("href",
        "https://badge-button.netlify.app/darktheme.css");
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else if (themeStyle.href.match("https://badge-button.netlify.app/darktheme.css")) {
        themeStyle.setAttribute("href", "https://badge-button.netlify.app/lighttheme.css");
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

/* JS for closing alert */

const elements = document.querySelectorAll(".alert-dismissable");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", (e) => {
        if (e.target.classList.contains("fa-close")) {
            e.target.parentElement.style.display = "none";
        }
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