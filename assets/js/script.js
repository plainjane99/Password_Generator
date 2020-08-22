// Assignment code here

// defines all possible characters per category
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "1234567890";
var specialString = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";

// defines other global variables
var passwordLength;  // variable for password length
var requiredChar = [];  // variable for array holding required characters
var passwordResult = [];  // variable for resulting password

// function that validates the length of the password is between 8 and 128 characters.
var validLength = function() {

  // ask user for password length //
  passwordLength = window.prompt("Choose the length of your password between 8 and 128 characters.");

  // conditional recursive function call
  if(passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid length.  Please try again.");
    return validLength();
  }

  return passwordLength;
  
}

// function that runs Password Generator
var generatePassword = function() {

  // turns strings into arrays
  lower = lowerString.split("");
  upper = upperString.split("");
  number = numberString.split("");
  special = specialString.split("");

  window.alert("Welcome to Password Generator!");
  
  validLength();

  // confirms for which types of characters are required
  var lowercase = window.confirm("Would you like to include lowercase?");
  var uppercase = window.confirm("Would you like to include uppercase?");
  var numerals = window.confirm("Would you like to include numbers?");
  var specialChar = window.confirm("Would you like to include special characters?");

  // successive if's to systematically add possibilities as requested by user

  if (lowercase) {

    // add all lowers to requiredChar array
    requiredChar = requiredChar.concat(lower);

    // add an initial lower to meet requirements
    index = Math.floor(Math.random()*lower.length);
    passwordResult = passwordResult.concat(lower[index]);

  }

  if (uppercase) {

    // add all uppers to requiredChar array
    requiredChar = requiredChar.concat(upper);

    // add an initial lower to meet requirements
    index = Math.floor(Math.random()*upper.length);
    passwordResult = passwordResult.concat(upper[index]);

  }

  if (numerals) {

    // add all uppers to requiredChar array
    requiredChar = requiredChar.concat(number);

    // add an initial lower to meet requirements
    index = Math.floor(Math.random()*number.length);
    passwordResult = passwordResult.concat(number[index]);

  }

  if (specialChar) {

    // add all uppers to requiredChar array
    requiredChar = requiredChar.concat(special);

    // add an initial lower to meet requirements
    index = Math.floor(Math.random()*special.length);
    passwordResult = passwordResult.concat(special[index]);

  }

  // fills out the remaining requirements of password length

  for (i = passwordResult.length; i < passwordLength; i++) {

    index = Math.floor(Math.random()*requiredChar.length);
    passwordResult = passwordResult.concat(requiredChar[index]);

  }

  passwordResult = passwordResult.join("");

  return(passwordResult);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
