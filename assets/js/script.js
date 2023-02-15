const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input-text");
const ulElement = document.querySelector(".todo-list");

////  Event Listeners - to listen for events 
//// and trigger functions

/**  When a new item is entered into the input area 
 *  the event listener is triggered on keying ENTER.
 *  The default "submit" action is prevented and a createItem function is triggered
 */

formElement.addEventListener("submit", (enter) => {
    enter.preventDefault();
    createItem();
})


////  Functions - to carry out certain tasks triggered by eventListeners, and other actions

/**  createItem() Creates a new item, 
 * it takes the input value, 
 * creates a list item with the icons and class names, 
 * adds it all to the DOM
 * then clears out the input field  
 */


function createItem() {
    const listElement = document.createElement("li");
    let inputValue = inputElement.value;
    const tickIconElement = document.createElement("div");
    const squareIconElement = document.createElement("div");
    const trashIconElement = document.createElement("div");
    const barsIconElement = document.createElement("div");

    listElement.innerText = inputValue;

    ulElement.appendChild(listElement);

    inputElement.value = "";

    squareIconElement.innerHTML = `<i class="fa-regular fa-square"></i>`;

    listElement.appendChild(squareIconElement);

    trashIconElement.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

    listElement.appendChild(trashIconElement);

    barsIconElement.innerHTML = `<i class="fas fa-bars"></i>`;

    listElement.appendChild(barsIconElement);

}