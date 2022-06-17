// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var withspecialCharacter = false;
var withnumericCharacter = false;
var withlowercaseCharacter = false;
var withuppercaseCharacter = false;

function generatePassword() {
  console.log("Hey! You clicked the button!")

  return "Generated password will go here"
}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
