let headerColumn = document.querySelector(".header-column")
let formColumn = document.querySelector(".form-column")

if (window.innerWidth <= 1000) {
    headerColumn.classList.replace("eight", "sixteen")
    formColumn.classList.replace("eight", "sixteen")
}

window.addEventListener('resize', changeClass)

function changeClass() {
    if (window.innerWidth <= 1000) {
        headerColumn.classList.replace("eight", "sixteen")
        formColumn.classList.replace("eight", "sixteen")
    } else {
        headerColumn.classList.replace("sixteen", "eight")
        formColumn.classList.replace("sixteen", "eight")
    }
}