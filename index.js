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
    item.innerHTML = `<input type="checkbox"> ${text} <button class="remove-button">x</button>`;
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

const addItemTodo = e => {
    e.preventDefault();
    const item = createItem(input.value);
    list.appendChild(item);
    input.value="";
}

const removeItemTodo = () => {
    console.log("Passed!!")
}

addItemButton.addEventListener("click", addItemTodo)
removeButton.addEventListener('click', removeItemTodo)