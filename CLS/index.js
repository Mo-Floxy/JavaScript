// our registered username and password
const Username = "Aptech";
const Password = "2025";

let number = parseInt(Password);
console.log(number);
console.log(typeof Password);

const correctUsername = prompt("Enter your Username! ");
if (Username === correctUsername) {
  // If the username is correct, ask for the password
  let correctPassword = prompt("Enter your password!");

  // Validate the password
  if (Password === correctPassword) {
    alert("Login successful!");
  } else {
    alert("Incorrect password. Please try again.");
  }
} else {
  alert("Invalid username. Access denied.");
}

