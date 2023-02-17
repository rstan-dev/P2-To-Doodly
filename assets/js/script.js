const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input-text");
const ulElement = document.querySelector(".todo-list");


displayTodoList();




///--------------------------------------------------///
////  Event Listeners - to listen for events 
//// and trigger functions
///--------------------------------------------------///

/**  Enter:  When a new item is entered into the input area 
 *  the event listener is triggered on keying ENTER.
 *  The default "submit" action is prevented and a createItem function is triggered
 */

formElement.addEventListener("submit", (enter) => {
    enter.preventDefault();
    createItem();
})


///-----------------------------------------------------///
////  FUNCTIONS - to carry out certain tasks triggered by eventListeners, and other actions
///--------------------------------------------------///


/**  displayTodoList() retrieves the items in localStorage 
 * it gets the items from the todoList Key, and iterates through each item and passes it to the createItem() function  
 */
function displayTodoList() {
    let storageList = JSON.parse(localStorage.getItem("todoList"));
    storageList.forEach((item) => createItem(item));
}

/**  createItem() Creates a new item, 
 * it takes the input value, 
 * creates a list item with the icons and class names, 
 * adds it all to the DOM
 * then clears out the input field  
 */

function createItem(item) {

    const listElement = document.createElement("li");
    const tickIcon = document.querySelector(".fa-square-check");
    const squareIcon = document.querySelector(".fa-square");
    const liElement = document.querySelector("li");

    let inputValue = inputElement.value;

    if (item) inputValue = item.itemName;
    if (item && item.ticked)
        listElement.classList.add("ticked");

    listElement.innerText = inputValue;

    ulElement.appendChild(listElement);
    inputElement.value = "";

    const squareIconElement = document.createElement("div");

    if (listElement.className === "ticked") {
        squareIconElement.innerHTML = `<i class="fa-sharp fa-solid fa-square-check"></i>`;
    } else {
        squareIconElement.innerHTML = `<i class="fa-regular fa-square"></i>`
    };

    listElement.appendChild(squareIconElement);

    const trashIconElement = document.createElement("div");
    trashIconElement.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    listElement.appendChild(trashIconElement);

    const barsIconElement = document.createElement("div");
    barsIconElement.innerHTML = `<i class="fas fa-bars"></i>`;
    listElement.appendChild(barsIconElement);


    /**  Toggle Tickbox: The event listener is triggered when the user clicks on the square or tick icon.
     *  The click event toggles a class in the list item which triggers CSS to change the icon from a square to a tick and cross out the list item as done.
     */
    squareIconElement.addEventListener("click", () => {
        listElement.classList.toggle("ticked");
        updateLocalStorage();

        if (listElement.className === "ticked") {
            squareIconElement.innerHTML = `<i class="fa-sharp fa-solid fa-square-check"></i>`;

        } else {
            squareIconElement.innerHTML = `<i class = "fa-regular fa-square"></i>`;

        };
    });

    /**  Delete item using the trash can icon.
     *   when user clicks on the trash can, the list element is deleted using the remove() function
     */
    trashIconElement.addEventListener("click", () => {
        listElement.remove();

        updateLocalStorage();
    });

    updateLocalStorage();

}

/**  updateLocalStorage() - updates the number of items on the list
 * it selects all the list elements and loops through each list element to create an object
 *  then pushes into an empty array.
 * The array is saved to localStorage
 */

function updateLocalStorage() {
    const listElements = document.querySelectorAll("li");
    todoList = [];

    listElements.forEach((listElement) => {
        todoList.push({
            itemName: listElement.innerText,
            ticked: listElement.classList.contains("ticked"),
        });
    })

    localStorage.setItem("todoList", JSON.stringify(todoList));

    updateListCounter();

    updateItemsTickedCounter();

}


/**  updateListCounter - updates the number of items on the list
 * it gets the length of the data array from localStorage and parses it to the innertext of the items counter 
 */

function updateListCounter() {
    const itemsCounter = document.getElementById("items-counter-number");

    let totalItemsCount = JSON.parse(localStorage.todoList).length;

    itemsCounter.innerText = totalItemsCount;
}

/**  updateItemsTickedCounter - updates the number of ticked items on the list
 * it gets the data from localStorage and parses it as an array.
 *  returns the count of objects (ticks) that have a specific value(true) for a given key("ticked")
 * it passes this number back to the DOM via innerText
 */
function updateItemsTickedCounter() {
    const totalTickedItems = document.getElementById("items-ticked-number");

    let todoListData = localStorage.getItem("todoList");

    let todoListArray = JSON.parse(todoListData);
    console.log(todoListArray);

    function countTicks(value, todoListArray, key) {
        return todoListArray.reduce(function (count, item) {
            return count + (item[key] === value);
        }, 0);
    }

    const totalTicks = countTicks(true, todoListArray, "ticked");
    console.log(totalTicks);

    totalTickedItems.innerText = totalTicks;

}