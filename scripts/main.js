const hamButton = document.querySelector(".header .links .icon")
const links = document.querySelector(".header .links ul")
window.addEventListener("click", e => {
    if (e.target === hamButton || e.target.parentNode === hamButton) {
        const currentState = links.style.display
        links.style.display = currentState === "block" ? "none" : "block"
    }else {
        links.style.display = "none"
    }
})