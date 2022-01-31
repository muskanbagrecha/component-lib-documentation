const themeIcon = document.querySelector('.theme-icon');
const themeStyle = document.querySelector('.themestyle');
themeIcon.onclick = () => {
    if (themeStyle.href.match("https://alert-avatar.netlify.app/lighttheme.css")) {
        themeStyle.setAttribute("href",
        "https://alert-avatar.netlify.app/darktheme.css");
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else if (themeStyle.href.match("https://alert-avatar.netlify.app/darktheme.css")) {
        themeStyle.setAttribute("href", "https://alert-avatar.netlify.app/lighttheme.css");
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}