const menuBtn = document.querySelector(".responsive-nav .res-menu-btn");
let menuContainer = document.querySelector(".responsive-nav .first-level");

let isToggled = false;

menuBtn.addEventListener("click", showMenu);

function showMenu() {
    if (!isToggled) {
        menuContainer.classList.add("toggled");
        isToggled = !isToggled;
    } else {
        menuContainer.classList.remove("toggled");
        isToggled = !isToggled;
    }
}