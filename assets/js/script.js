const formElement = document.querySelector(".form");
let inputElement = document.querySelector(".input-text");
const ulElement = document.querySelector(".todo-list");

displayTodoList();

///--------------------------------------------------///
////  Event Listeners - to listen for events 
//// and trigger functions.
///--------------------------------------------------///

/**  On a change to the Input:  When a new item is entered into the input area: 
 *  the event listener checks for whitespaces at the beginning and end of the input, and replaces them with nothing
 */
formElement.addEventListener("change", function () {
    let resetWhitespace = inputElement.value.trim(/\s+/g, "");

    inputElement.value = resetWhitespace;
})

/**  On Press Enter:  When a new item is entered into the input area 
 *  the event listener is triggered on keying ENTER.
 *  The default "submit" action is prevented and a createItem function is triggered.
 */
formElement.addEventListener("submit", (enter) => {
    enter.preventDefault();

    let inputElement = document.querySelector(".input-text");
    let inputValue = inputElement.value.trim()

    if (inputValue == "") {
        ifEmptyInput()
    } else {
        createItem()
    }
})

/**  ifEmptyInput() sets a rule if there is no input entered, a message appears for 3 secs
 * reminding the user nothing was entered
 */
function ifEmptyInput() {
    let placeholderMessage = inputElement.placeholder;
    let alertPlaceholderMessage = "You have not entered anything yet...";

    setTimeout(function () {
        inputElement.placeholder = alertPlaceholderMessage;
        inputElement.classList.add("warning-placeholder");
        inputElement.classList.add("warning-border")
    }, 50);

    setTimeout(function () {
        inputElement.placeholder = placeholderMessage;
        inputElement.classList.remove("warning-placeholder");
        inputElement.classList.remove("warning-border")
    }, 3000);
}

/**  displayTodoList() retrieves the items in localStorage: 
 * it gets the items from the todoList Key, and iterates through each item and passes it to the createItem() function.
 */
function displayTodoList() {
    let storageList = JSON.parse(localStorage.getItem("todoList"));
    if (storageList) storageList.forEach((item) => createItem(item));
}

/**  createItem() Creates a new item: 
 * it takes the input value, 
 * creates a list item with the icons and class names, 
 * adds it all to the DOM,
 * then clears out the input field.  
 */
function createItem(item) {
    const listElement = document.createElement("li");
    let inputValue = inputElement.value;

    if (item) inputValue = item.itemName;
    if (item && item.ticked)
        listElement.classList.add("ticked");

    listElement.innerText = inputValue;

    ulElement.appendChild(listElement);
    inputElement.value = "";
    inputElement.placeholder = "Enter something to do here...";

    const squareIconElement = document.createElement("div");

    if (listElement.className === "ticked") {
        squareIconElement.innerHTML = `<i class="fa-sharp fa-solid fa-square-check"></i>`;
    } else {
        squareIconElement.innerHTML = `<i class="fa-regular fa-square"></i>`;
    }

    listElement.appendChild(squareIconElement);

    const trashIconElement = document.createElement("div");
    trashIconElement.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    listElement.appendChild(trashIconElement);

    const barsIconElement = document.createElement("div");
    barsIconElement.innerHTML = `<i class="fas fa-bars"></i>`;
    listElement.appendChild(barsIconElement);

    /**  Toggle Tickbox: The event listener is triggered when the user clicks on the square or tick icon:
     *  The click event toggles a class in the list item which triggers CSS to change the icon from a square to a tick and cross out the list item as done.
     */
    squareIconElement.addEventListener("click", () => {
        listElement.classList.toggle("ticked");
        updateLocalStorage()

        if (listElement.className === "ticked") {
            squareIconElement.innerHTML = `<i class="fa-sharp fa-solid fa-square-check"></i>`;

        } else {
            squareIconElement.innerHTML = `<i class = "fa-regular fa-square"></i>`;
        }
    });

    /**  Delete item using the trash can icon:
     *   when user clicks on the trash can, the list element is deleted using the remove() function.
     */
    trashIconElement.addEventListener("click", () => {
        listElement.remove();

        updateLocalStorage();
    });

    updateLocalStorage();
}

/**  updateLocalStorage() - updates the number of items on the list:
 * it selects all the list elements and loops through each list element to create an object,
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
    });

    localStorage.setItem("todoList", JSON.stringify(todoList));

    updateListCounter();

    updateItemsTickedCounter();

    calculatePercentComplete();
}

/**  updateListCounter - updates the number of items on the list:
 * it gets the length of the data array from localStorage and parses it to the innertext of the items counter. 
 */
function updateListCounter() {
    const itemsCounter = document.getElementById("items-counter-number");

    let totalItemsCount = JSON.parse(localStorage.todoList).length;

    itemsCounter.innerText = totalItemsCount;
}

/**  countTicks function - counts the number of ticks:
 *   Uses reduce method to count the number of values for a given key
 */
function countTicks(value, todoListArray, key) {
    return todoListArray.reduce(function (count, item) {
        return count + (item[key] === value);
    }, 0);
}

/**  updateItemsTickedCounter - updates the number of ticked items on the list:
 * it gets the data from localStorage and parses it as an array.
 *  returns the count of objects (ticks) that have a specific value(true) for a given key("ticked"),
 * it passes this number back to the DOM via innerText.
 */
function updateItemsTickedCounter() {
    const totalTickedItems = document.getElementById("items-ticked-number");

    let todoListData = localStorage.getItem("todoList");

    let todoListArray = JSON.parse(todoListData);

    const totalTicks = countTicks(true, todoListArray, "ticked");

    totalTickedItems.innerText = totalTicks;
}

/**  calculatePercentComplete function:
 *   Uses the same function to find the total number of ticked items:
 *   Uses the same method to call the total number of items from local storage,
 *   Calculates % using Math.round and updates the DOM via .innerText.
 */
function calculatePercentComplete() {
    const percentCompleteNumber = document.getElementById("items-complete-percent");

    let todoListData = localStorage.getItem("todoList");

    let todoListArray = JSON.parse(todoListData);

    const totalTicks = countTicks(true, todoListArray, "ticked");

    let totalItemsCount = JSON.parse(localStorage.todoList).length;

    let percentCalculation = Math.round(totalTicks / totalItemsCount * 100);

    let convertPercentCalNaN = Number.isNaN(percentCalculation) ? 0 : percentCalculation;

    percentCompleteNumber.innerText = convertPercentCalNaN;
}