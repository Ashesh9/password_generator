// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//lowerCharacters;
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const specials = "*&^%$#@!";
//specials;
const digits = "0123456789";
//digits;

function generatePassword() {
  var passwordLength;
  console.log(passwordLength);
  while (true) {
    var input = prompt("Please input number of chracters for password:");

    passwordLength = Number(input);
    if (
      !isNaN(passwordLength) &&
      passwordLength >= 8 &&
      passwordLength <= 128
    ) {
      break;
    } else {
      window.alert("Please enter valid number between 8 and 128");
    }
  }
  let acceptInput = "";

  var upps = confirm("Would you like to include UpperCase:");
  if (upps === true) {
    acceptInput += upperCharacters;
  }
  var digits = confirm("Would you like to include Digits:");
  if (digits === true) {
    acceptInput += digits;
  }
  var lows = confirm("Would you like to include LowerCase:");
  if (lows === true) {
    acceptInput += lowerCharacters;
  }
  var spec = confirm("Would you like to include SpecialCharacters:");
  if (spec === true) {
    acceptInput += specials;
  }
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
