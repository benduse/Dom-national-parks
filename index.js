
console.log(document);

/**
 This statement will find all elements containing the value of a rating on the page.
*/
const ratings = document.querySelectorAll(".rating .value");

/**
This statement  will find all elements on the page containing stars that are not shaded.
*/
const halfStars = document.querySelectorAll(".half");

/**
This statement will find the Gateway Arch park element by its ID.
*/
const gatewayArch = document.querySelector("#ganp");

/**
This statement  will find the element containing the established date for the Gateway Arch park.
*/
const established = document.querySelector("#ganp .established .value");

/**this statement will sellect al the desctiption on the page
 */
const descriptions = document.querySelectorAll(".description-display");