const form = document.querySelector(".form-group");
const button = form.querySelector('[type="submit"]');

//error_text
const message = `* Please provide a valid email address`;
const error = document.createElement("p");
error.classList.add("error_text");
error.textContent = message;

//listening for submit an event
function checkEmail(e) {
  //prevent default area
  e.preventDefault();

  //grab the value of the email
  const email = e.target.querySelector('[type="email"]').value;

  // standard html notification
  if (!validateEmail(email)) {
    form.classList.add("error");
    form.insertBefore(error, button);
  } else {
    form.classList.remove("error");
    form.removeChild(error);
  }
  console.log(email);

  /* alternative -> alert warning popup notification

  if (!validateEmail(email)) {
    alert ("Please provide a valid email address");
    return false;
  } else {
    alert ("Valid email address!");
    return true;
  }
  */
}

//regex mail validation
const validateEmail = (email) => {
  const regex =
    /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,3}(?:\.[a-z]{2,3})?$/gm;
  return regex.test(String(email).toLocaleLowerCase());
};

form.addEventListener("submit", checkEmail);
