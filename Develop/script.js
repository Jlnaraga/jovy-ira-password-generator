// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword("0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";) {
  var passwordlength = 8;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
git add .
