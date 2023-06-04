document.getElementById("registration-form").addEventListener("submit", function(event) {
  if (!isNameValid() || !isLastNameValid() || !isEmailValid()) {
    event.preventDefault();
  } else {
    saveEmailToLocalStorage();
  }

  event.preventDefault(); 

  var nameField = document.getElementById("name");
  var lastNameField = document.getElementById("last-name");
  var textareaField = document.getElementById("message");

  var data = {
    name: nameField.value.trim(),
    lastName: lastNameField.value.trim(),
    textarea: textareaField.value.trim()
  };

  saveDataToLocalStorage(data);
});

function isNameValid() {
  var nameField = document.getElementById("name");
  if (nameField.value.trim() === "") {
    nameField.setCustomValidity("Please enter your name.");
    return false;
  } else {
    nameField.setCustomValidity("");
    return true;
  }
}

function isLastNameValid() {
  var lastNameField = document.getElementById("last-name");
  if (lastNameField.value.trim() === "") {
    lastNameField.setCustomValidity("Please enter your last name.");
    return false;
  } else {
    lastNameField.setCustomValidity("");
    return true;
  }
}

function isEmailValid() {
  var emailField = document.getElementById("email");
  var emailValue = emailField.value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    emailField.setCustomValidity("Please enter your email address.");
    return false;
  } else if (!emailPattern.test(emailValue)) {
    emailField.setCustomValidity("Please enter a valid email address.");
    return false;
  } else {
    emailField.setCustomValidity("");
    return true;
  }
}

function saveEmailToLocalStorage() {
  var emailField = document.getElementById("email");
  var emailValue = emailField.value.trim();
  localStorage.setItem("email", emailValue);
}

function saveDataToLocalStorage(data) {
  var jsonData = JSON.stringify(data); 
  localStorage.setItem("registrationData", jsonData); 
}


var storedData = localStorage.getItem("registrationData");

if (storedData) {
  var data = JSON.parse(storedData); 
}
