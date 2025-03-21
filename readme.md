https://timina-makena.github.io/code-challange-ramen-rater/

Ramen Rater Project Flow

HTML
Have the <!DOCTYPE html>
Inside <head>, link css. Once done, get into the <header> and have <h1> where you'll have "Ramen Rater" as the heading that displays the title.
Add empty <div which will hold the ramen images, JavaScript will add images inside. Give an id to the <div id= "ramen-menu" This will allow JS to find the div and add images.

Go ahead and add another <div> and give it an id <div id="ramen-detail>.
Inside this <div> have your <h2> and give it and id= "ramen-name" and name >Select a ramen</h2>
Add <img> (inside the same div) and give it an id. This part will show the ramen image updated when an image is clicked. 
Add <p> elements that will display the restaurant, rating, and comment, with <span> elements inside so that JavaSript can change their text.

Have another <div> which will be the form to add a new ramen. Give this div an id="ramen-form". Add form which will allow one to add new ramen, then have <input> fields which will allow one to enter ramen details. On the same line have placeholder which will show a hint inside input fields for example "Name". Also, have "required" which ensures the user must fill the field before they submit.
Lastly, link your JavaScript by having <script src= "index.js" defer ></script>. This will load the index.js file, which contains JavaScript to function.

CSS
Secondly, have your css file and add the fonts, color changes, and adjustments you want to style the page and make it look nice. 

JS
To make the page interactive, add Javascript and the first part will get html elements so we can change them with Javascript. Then have the array of objects that is the part where you will store your ramen; the name, restaurant, images, rating, and comment. All this information should be indicated with the exact details you want displayed. 
Go ahead and have your function where you'll have displayRamens that is function displayRamens() { ..., enabling you to add ramen images and make them clickable when selected. 
Lastly, have a new form section that will add new ramen to the list when the form is submitted. 
