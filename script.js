// Assignment Code
var generateBtn = document.querySelector("#generate");

//const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
//const specials = "*&^%$#@!";
//const digits = "0123456789";
function generatePassword() {
  var passwordLength;
  console.log(passwordLength);
  while (true) {
    var input = prompt("Please input number of characters for password:");
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

  var digits = confirm("Would you like to include Digits:");
  if (digits === true) {
    acceptInput += "0123456789";
  }
  var upps = confirm("Would you like to include UpperCase:");
  if (upps === true) {
    acceptInput += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  var spec = confirm("Would you like to include SpecialCharacters:");
  if (spec === true) {
    acceptInput += "(*&^%$#@!)";
  }
  var lows = confirm("Would you like to include LowerCase:");
  if (lows === true) {
    acceptInput += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passwordLength >= 72) {
    acceptInput = acceptInput + acceptInput;
  }
  let genpass = "";

  for (let i = 0; i < passwordLength; i++) {
    var char = Math.floor(Math.random() * acceptInput.length);
    console.log(char);
    var singlechar = acceptInput[char];
    genpass += singlechar;
  }
  return genpass;
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
