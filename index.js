const menuOpenButton = document.querySelector("[data-menu-open-button]");
const menu = document.querySelector("[data-menu]");
const menuCloseButton = menu.querySelector("[data-menu-close-button]");

const openCloseMenu = () => {
    menu.classList.toggle("menu-open")
};

menuOpenButton.addEventListener("click", openCloseMenu);
menuCloseButton.addEventListener("click", openCloseMenu);


//Section - To-do list

const addItemButton = document.querySelector("[data-to-do-button]");
const list = document.querySelector("[data-to-do-list]");
const input = document.querySelector("[data-input]");
const removeButton = document.querySelector("[data-remove-button]")

// const createButton = () => {
//     const removeItemButton = document.createElement("button");
//     removeItemButton.innerHTML = "x";
//     removeItemButton.classList.add("remove-button");
//     return removeItemButton;
// }

const createItem = (text) => {
    const item = document.createElement("li");
    item.innerHTML = text;
    item.innerHTML = `<input class="checkbox" type="checkbox"> ${text} <button data-remove-button class="remove-button">x</button>`;
    return item
// const createItem = (text) => {
//     const item = document.createElement("li");
//     item.innerHTML = text;
//     const removeItemButton = createButton();
//     // const removeItemButton = document.createElement("button")
//     // removeItemButton.innerHTML = "x";
//     // removeItemButton.classList.add("remove-button")
//     item.appendChild(removeItemButton);
//     return item; 
};

const addItemTodo = event => {
    event.preventDefault();
    const item = createItem(input.value);
    list.appendChild(item);
    input.value="";
};

const removeItemTodo = (event) => {
    const item = event.target.parentNode;
    
    if(event.target.getAttribute("data-remove-button") !== null) {//se nao for null ele na vai entrar no if
    list.removeChild(item);
    }

    if(event.target.type === "checkbox") {
        item.classList.toggle("checked");
    }
}

addItemButton.addEventListener("click", addItemTodo)
list.addEventListener('click', removeItemTodo)