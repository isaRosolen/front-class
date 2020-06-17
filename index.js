const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");

const onMenuButtonClick = () => {
    menu.classList.add("menu-open");
};

menuButton.addEventListener('click', onMenuButtonClick);
