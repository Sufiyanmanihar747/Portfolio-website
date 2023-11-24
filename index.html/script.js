const open_btn = document.getElementById("open-btn");
const target = document.getElementById("ul")
open_btn.addEventListener("click", func);
function func() {
    if (open_btn.innerHTML = "&#9776;" && target.classList.toggle("active")) {
        open_btn.innerHTML = "&times;"
    }
    else {
        target.classList.toggle(!"active")
        open_btn.innerHTML = "&#9776;"
    }
}

// DARK THEME

const theme_btn = document.querySelectorAll("i");
const body = document.querySelector("body");
theme_btn.forEach(btn => {
    btn.addEventListener("click", themefunc);
});

function themefunc() {
    document.body.classList.toggle('dark-mode');

    theme_btn.forEach(btn => {
        btn.classList.toggle('bi-moon-fill');
        btn.classList.toggle('bi-brightness-high-fill');
    });
    console.log('this is running');
}