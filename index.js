const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("The form was submitted");
  };

  const main = () => {
    //get the form element 

    const form = document.querySelector ("#park-form");

    //Attach the submit handler

form.addEventListener("submit", submitHandler );
  };

  window.addEventListener("DOMContentLoaded", main);

  // Get the name input
const parkName = document.querySelector("#name-input").value;

console.log(parkName);

const name = formData.get("name");
console.log(name);