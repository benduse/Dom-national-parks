
console.log(document);

/**this statement will sellect al the desctiption on the page
 */
const descriptions = document.querySelectorAll(".description-display");

/** the code below addd ... on the content with more than two hundred and fity characters */

for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }
    
    desc.innerText = content;
  }
 