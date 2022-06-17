// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var withspecialCharacter = false;
var withnumericCharacter = false;
var withlowercaseCharacter = false;
var withuppercaseCharacter = false;

function passwordLength() {
  passwordLength = prompt("How many characters would you like your password to contain?");
  console.log(passwordLength);
}

function specialCharacter() {
  let text = ("Click OK to confirm including special characters.");
  withspecialCharacter = confirm(text);
  console.log(withspecialCharacter);
}

function numericCharacter() {
  let text = ("Click OK to confirm including numeric characters.");
  withnumericCharacter = confirm(text);
  console.log(withnumericCharacter);
}

function lowercaseCharacter() {
  let text = ("Click OK to confirm including lowercase characters.");
  withlowercaseCharacter = confirm(text);
  console.log(withlowercaseCharacter);
}

function uppercaseCharacter() {
  let text = ("Click OK to confirm including uppercase characters.");
  withlowercaseCharacter = confirm(text);
  console.log(withuppercaseCharacter);
}

function generatePassword() {

  var smallAlphabet = "abcdefghijklmnopqrstuvwxyz"
  var bigAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialChar = "!@#$%^&*()" 
  var numero = "0123456789"
  console.log(smallAlphabet);
  console.log(bigAlphabet);
  console.log(specialChar);
  console.log(numero);
  console.log("Hey! You clicked the button!")

  var characters = "" 
  if (withspecialCharacter) {
  characters += specialChar
  }

  if (withnumericCharacter) {
    characters += numero
  }

  if (withlowercaseCharacter) {
    characters += smallAlphabet
  }

  if (withuppercaseCharacter) {
    characters += bigAlphabet
  }   
  






  return "Generated password will go here"
}


// Write password to the #password input
function writePassword() {
  passwordLength()
  specialCharacter()
  numericCharacter()
  lowercaseCharacter()
  uppercaseCharacter()


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
