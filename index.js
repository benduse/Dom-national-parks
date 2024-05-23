// select all the descriptions on the page

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

// select all rating values
const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

// Select all parks
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;

// create a new element
const newElement = document.createElement("div");

// add the text
newElement.innerText = `${numberParks} exciting parks to visit`;

//add the class
newElement.classList.add("header-statement");

// insert the new element
const header = document.querySelector("header");
header.appendChild(newElement);

// get the parent element of all parks
const main = document.querySelector("main");

/**select a single park*/
const park = main.querySelector(".park-display");

// remove that park
//main.removeChild(park);

//select element 
const firstParkDisplay = document.querySelector(".park-display")
//console.log(firstParkDisplay)
//create button or new element button
const newButton = document.createElement("button")

newButton.innerHTML = "Learn More"
//adding styles to the new created button 
newButton.classList.add("button-styling");

//append element to the dome. add the button to the web
firstParkDisplay.appendChild(newButton);
console.log(newButton)
