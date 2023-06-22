//your JS code here. If required.
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const rememberMeCheckbox = document.querySelector("#checkbox");
const exisitingButton = document.querySelector("#existing");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const rememberMe = rememberMeCheckbox.checked;

  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);
  showButton();

  form.reset(); // Clear the form fields
});

function loginAsSaved() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username && password) {
    alert(`Logged in as ${username}`);
    form.reset();
  }
}

function showButton() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username && password) {
    exisitingButton.style.display = "block";
  } else {
    exisitingButton.style.display = "none";
  }
}

exisitingButton.style.display = "none";
exisitingButton.addEventListener("click", loginAsSaved);
showButton();
