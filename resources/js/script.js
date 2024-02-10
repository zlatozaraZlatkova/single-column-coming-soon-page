const formRef = document.querySelector(".form-group");
const emailRef = document.querySelector("#email");
const buttonRef = document.querySelector('[type="submit"]');

formRef.addEventListener("submit", checkEmail);

function checkEmail(evn) {
  evn.preventDefault();

  const email = emailRef.value;

  if (!email) {
    return;
  }

  const liElement = document.createElement("div");
  liElement.className = "alert";


  if (!validateEmail(email)) {
    const error = genElements("p", liElement, `* Please provide a valid email address.`, "error_text");
    formRef.appendChild(error);

    formRef.classList.remove("notify");
    formRef.classList.add("error");
    formRef.insertBefore(error, buttonRef);

    setTimeout(() => removeAlert(error), 1600);

  } else {
    const notify = genElements("p", liElement, `* We're happy to see you've joined us!`, "notify_text");
    formRef.appendChild(notify);

    formRef.classList.remove("error");
    formRef.classList.add("notify");
    formRef.insertBefore(notify, buttonRef);

    //Hide the alert after 1000ms (the same amount of milliseconds it takes to fade out)
    setTimeout(() => removeAlert(notify), 1000);

  }

}

//remove dom element
function removeAlert(alertEl) {
  alertEl.remove();
  formRef.className = "form-group";
  emailRef.value = "";

}

//creating a DOM element
function genElements(tag, parent, content, className) {
  const element = document.createElement(tag);
  if (content) {
    element.textContent = content;
  }
  if (className) {
    element.className = className;
  }

  parent.appendChild(element);
  return element;
}

//regex mail validation
const validateEmail = (email) => {
  const regex =
    /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,3}(?:\.[a-z]{2,3})?$/gm;
  return regex.test(String(email).toLocaleLowerCase());
};
