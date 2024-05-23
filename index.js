
console.log(document);

/**this statement will sellect al the desctiption on the page
 */
/**const descriptions = document.querySelectorAll(".description-display");

 const ratings = document.querySelectorAll(".rating-display .value");
 for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    
    if (ratingValue > 4.7){
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
   
  }
  */

/**the code slects the park class as a selector on the page */
  const parks = document.querySelectorAll(".park-display");

  /** this code gives us the number of parks using the length property of the list */
  const numberParks = parks.length;

  /** creates an emply element using div */
  const newElement = document.createElement("div");

  /** the code below sets the text of the element created with innerTexxt property */
  newElement.innerText = `${numberParks} exciting parks to visit`;