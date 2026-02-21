document.getElementById("contactForm").addEventListener("submit", function(event) {

  event.preventDefault(); // Prevent form submission

  // Get trimmed input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Get error elements
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");
  let successMessage = document.getElementById("successMessage");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  
  // Name validation (only letters and spaces)
let nameRegex = /^[A-Za-z\s]+$/;

if (name === "") {
  nameError.textContent = "Name cannot be empty.";
  isValid = false;
} else if (!nameRegex.test(name)) {
  nameError.textContent = "Name should contain only letters and spaces.";
  isValid = false;
}

  //  Email Validation using Regex
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Email cannot be empty.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  //  Message Validation
  if (message === "") {
    messageError.textContent = "Message cannot be empty.";
    isValid = false;
  }

  //  If all fields valid
  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }

});