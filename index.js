
console.log(document);

/**this statement will sellect al the desctiption on the page
 */
const descriptions = document.querySelectorAll(".description-display");

 const ratings = document.querySelectorAll(".rating-display .value");
 for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    
    if (ratingValue > 4.7){
        rating.style.fontWeight ="bold";
        rating.style.color = "#3ba17c";
    }
   
  }