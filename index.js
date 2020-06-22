
const menuOpenButton = document.querySelector("[data-menu-open-button]");
const menu = document.querySelector("[data-menu]");
const menuCloseButton = menu.querySelector("[data-menu-close-button]");

const openCloseMenu = () => {
    menu.classList.toggle("menu-open")
};

// const closeMenu = () => {
//     menu.classList.remove("menu-open")
// };

menuOpenButton.addEventListener("click", openCloseMenu);
menuCloseButton.addEventListener("click", closeMenu);


//ordem: a ordem nao faz diferença se eu estiver usando o dom / se eu especifico o PAI, ai ele precisa estar na ordem
//agora pensar na interaçaos - que será o click no botão
//nossa função - a gente que vai criar a propria funçao

//nomear a minha funçao

// --

// const menuButton = document.querySelector("[data-menu-button]"); -- o document é o dom (objeto), (Método) query selector é o que busca
// const menu = document.querySelector("[data-menu]");

// const onMenuButtonClick = () => {
//     menu.classList.add("menu-open");
// };

// const onMenuButtonClick = () => {
//     menu.classList.add("menu-close");
//     menu.classList.remove("menu-open");
// }

// menuButton.addEventListener('click', onMenuButtonClick);
