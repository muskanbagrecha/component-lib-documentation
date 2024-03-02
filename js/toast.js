function removeElement() {
    setTimeout(function () {
        document.querySelector('.toast').style.display = 'none';
    }, 10000);
}
document.querySelector(".cross").addEventListener('click', function (event) {
    event.target.parentElement.parentElement.remove();
});
removeElement();