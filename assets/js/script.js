const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input-text");
const ulElement = document.querySelector(".todo-list");




///--------------------------------------------------///

////  Event Listeners - to listen for events 
//// and trigger functions

/**  Enter:  When a new item is entered into the input area 
 *  the event listener is triggered on keying ENTER.
 *  The default "submit" action is prevented and a createItem function is triggered
 */

formElement.addEventListener("submit", (enter) => {
    enter.preventDefault();
    createItem();
})






/**  Toggle Tickbox: The event listener is triggered when the user clicks on the square or tick icon.
 *  The click event toggles a class in the list item which triggers CSS to change the icon from a square to a tick and cross out the list item as done.
 */








///-----------------------------------------------------///

////  Functions - to carry out certain tasks triggered by eventListeners, and other actions

/**  createItem() Creates a new item, 
 * it takes the input value, 
 * creates a list item with the icons and class names, 
 * adds it all to the DOM
 * then clears out the input field  
 */

function createItem() {

    const listElement = document.createElement("li");



    const tickIcon = document.querySelector(".fa-square-check");
    const squareIcon = document.querySelector(".fa-square");
    const liElement = document.querySelector("li");

    let inputValue = inputElement.value;


    listElement.innerText = inputValue;

    ulElement.appendChild(listElement);
    inputElement.value = "";

    const squareIconElement = document.createElement("div");
    squareIconElement.innerHTML = `<i class="fa-regular fa-square"></i>`;
    listElement.appendChild(squareIconElement);

    const trashIconElement = document.createElement("div");
    trashIconElement.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    listElement.appendChild(trashIconElement);

    const barsIconElement = document.createElement("div");
    barsIconElement.innerHTML = `<i class="fas fa-bars"></i>`;
    listElement.appendChild(barsIconElement);


    // squareIconElement.addEventListener("click", () => {
    //     liElement.classList.toggle("ticked");

    //     if (liElement.className === "ticked") {
    //         squareIconElement.innerHTML = `<i class="fa-sharp fa-solid fa-square-check"></i>`
    //     } else {
    //         squareIconElement.innerHTML = `<i class = "fa-regular fa-square"></i>`
    //     };
    // });

    trashIconElement.addEventListener("click", () => {
        listElement.remove();
    });


}