// Assignment code here

// function that validates the length of the password as between 8 and 128 characters.
var validLength = function() {

  // ask user for password length //
  var passwordLength = window.prompt("Choose the length of your password between 8 and 128 characters.");

  // conditional recursive function call
  if(passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid length.  Please try again.");
    return validLength();
  }

  return passwordLength;
  
}

// function that starts Password Generator

var runGen = function() {

  window.alert("Welcome to Password Generator!");

  debugger;

  validLength();

  // confirms for which types of characters are required
  lowercase = window.confirm("Would you like to include lowercase?");
  uppercase = window.confirm("Would you like to include uppercase?");
  numerals = window.confirm("Would you like to include numbers?");
  specialChar = window.confirm("Would you like to include special characters?");

  // defines possible characters 
  var charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var characters = charString.split("");

  // lowercase letters are indices 0 through 25, min = 0, max = 26
  // uppercase letters are indices 26 through 51, min = 26, max = 51
  // numbers are indices 52 through 61, min = 52, max = 61 
  // special characters are indices 62 through 91, min = 62, max = 91

  // log a message to the console to confirm the split works
  console.log(characters[91]);

  // for lowercase only

  // this is to make the code work only.  delete after problem is fixed
  passwordLength = 8;
  // this is to make the code work only.  delete after problem is fixed

  for (var i = 1; i <= passwordLength; i++) {
    index = randomNumber(0, 26);
    
    // characters[index];
    console.log(characters[index]);
  }

}

// random number generator for indices
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  return value;
}



runGen();

// var writePassword = function() {

// }

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
