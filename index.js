
console.log(document);

/**this statement will sellect al the desctiption on the page
 */
/*const descriptions = document.querySelectorAll(".description-display");*/

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
  }