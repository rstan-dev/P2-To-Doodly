# Project Name - To-Doodly
<img src="assets/images/to-doodly-logo-hi-res3.png">

* Final Screenshots create on - https://ui.dev/amiresponsive
  <img src="assets/documents/am-i-responive.jpg">
* [Link to Deployed Project](https://rstan-dev.github.io/P2-To-Doodly/)
* Gitpod: use `python -m http.server` to preview in server

## Contents(#contents)
​
* [User Experience (UX)](#user-experience)
    *  [Purpose & target audience](#purpose-and-target-audience)
    *  [User Story](#user-story)
* [Design](#design)
  * [Wireframes](#wireframes)  
  * [Color Scheme](#color-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [MVP](#mvp)
  * [Planned features](#planned-features)
* [Technology](#technology)
* [Deployment](#deployment)
* [Testing](#testing)
  * [Tests performed](#tests-performed)
  * [Bugs resolved](#bugs-resolved)
  * [Unresolved bugs](#unresolved-bugs)
  * [Improvements & future developments](#improvements-and-future-developments)
* [Credits](#credits)
  * [Code](#code)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgements](#acknowledgements)

 ## User Experience
   ### Purpose and target audience
   * This useful To Do List was created as a simple way to to encourage people to stay organised and keep ontop of their tasks.  Suitable for all ages this to do list has a fun modern interface.

   ### User Story
   * The user has one screen and simple intuitive navigation.  The logo at the top is self-explanatory in a fun bubble font.  The user is encouraged to enter something to do in the input box and on hitting enter the task is added to the list below.  There is square icon, which when clicked turns into a green tick and strikes out the task showing that it has been done.  The user can click the trach icon to delete the item or they can re-order the list using the bars icon on the right hand side.

   The list has been deisgned to show 5 items - in order to kep it on one screen, and any more items on the list can be accessed by using the scroll bar on the right.

   Below the task list is a Producivity area.  This keeps a counter of how many items are on the list, how many items are ticked on the list, and a % completion.

## Design
The app was conceived in Balsamiq and then designed in Canva, and the final product is very close to the original design
   ### Wireframes
   Desktop
   <img src="assets/documents/to-doodly-desktop-sortable-with-notes .png">

   Mobile
   <img src="assets/documents/to-doodly-mobile-sortable.png">

   ### Color Scheme
   * A black and cream color scheme was chosen for clear contrast.  White input and task area defines that task list and a green tick box was used to clearly identify what has been done.  Traffic light colors were used in the counter numbers within the productivity area.

   <img src="assets/documents/canva-design1.jpg">
 
   ### Typography
   *  The main text font is Roboto from Google Fonts chosen for its easy readability, with sans-serif as a backup. Caveat Brush from google fonts was chosen as a fun header for the productivity area.

   ### Imagery
   * The app uses one background image which is a royalty-free template from Canva.
   <img src="assets/documents/main-background.png">  

   ### MVP
   * The minimum viable product was to have a functioning to-do list that could add an item, tick and item as done and delete the item.  The items needed to be saved to local storage so they would still be available when the app was reloaded.

   ### Planned features
   * The original design had an icon to select the day of the week so the user could specify when to do a task.  This was dropped during development as it was not going to enhance the app, and would in fact irritate the user without being able to sort according to the day of the week
   
   ### Actual features
   * The drag and drop sortable function was added after finding a simple piece of library code on cdnjs.com.  This single piece of functionality enhances the app and allows the user to easily reorder their list in priority and items ticked.

## Technology
   * Balsamiq
   * Canva
   * HTML
   * CSS
   * Javascript

## Deployment
The following steps were taken to deploy this site:

1. The project was originally set up in an online repo on GitHub, with some test pages and an example modal created
2.  The project was immediately deployed to git pages, to ensure there would be no deployment issues
3. Under settings/pages, the main branch was selected as source
4. Each developer worked on a separate branch from the main
5. The project was edited in VS code in a local dev area  
6. Regular commits were added with descriptive commit messages
7. Commits were pushed to GitHub regularly.  Branches were merged with the main branch regularly, ensuring all merge conflicts were easily resolved.  
8. Link to live site: 

## Testing

### Tests performed
The following tests were performed on the app:
  * W3C HTML validation
  <img src="">

  * W3C CSS Validation
  <img src="">

  * Lighthouse Test
  <img src="assets/documents/lighthouse-reportjpg.jpg">

  * Manual testing of all the links, buttons, icons, drag and drop and counter and calculation functions
 
### Bugs resolved:
* Ticked icon would not save on refresh - resolved by: adding an if / else statement on the squareIconElement in createItem().
* Background not showing up on deployed project link - resolved by: changing background-image to a relative file path.
* Items not saving in the deployed project: resolved by: adding if (StorageList) to the displayTodoList(). without it, this was preventing the createItem() to run.
* Productivity calc not working correctly: resolved by changing span to an ID instead of a class
* Input box overlaps the scroll bar on mobile sizes - resolved by: adjusting the margin and padding of the list area
* NaN appears when there is an empty list - resolved by: adding Number.isNaN()
* There were several errors on W3C CSS validation service that needed to be corrected
* There was a warning on HTML validation that needed to be corrected
* There were several warning on JSHInt that needed to be corrected

### Unresolved bugs:
* There are several warnings to the CSS validation and an error in respect of the CDN.js library code for the drag and drop functionality, however as this functionality works perfectly, I have decided to leave this as it is

 ### Improvements and future developments
* More features could easily be added to this app, such as a way to categorise items, add a day or date, or due date and a numbering system would be useful features.  A further development would be to add a user login so the data could be stored securely in the cloud.


## Credits
  ### Code
  * All the code was written for the app, however, there were various sources to assist with prototyping.
  * Brad Traversy - https://www.udemy.com/course/web-projects-with-vanilla-javascript/
* Dr Sahand Ghavidel - https://www.udemy.com/course/html-css-javascript-projects-for-beginners/
  * Youtube tutorial - Drag & Drop List - https://www.youtube.com/watch?v=z54suepKiIU
* cdnjs.com - https://cdnjs.com/libraries/Sortable - for the drag and drop library code
* Stack Overflow - general queries and code explanations
* ChatGPT - general queries and code explanations
* MDN Docs - general queries
* Number.isNaN() - https://stackoverflow.com/questions/7540397/convert-nan-to-0-in-javascript

  ### Content
  * This app doesn not contain any content, as it is a todo list using user input

  ### Media
  * The background image from Canva is royalty-free

  ### Acknowledgements
  I'd like to extend thanks to the following people for assisting me with a few issues
  * SeanYoung_Hackteam (Code Institute) for some advice and guidance
  * Warwick Hart (Code Institute) for some advice and guidance
  * Sean Knowles for some advice and guidance