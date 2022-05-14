// Assignment code here
// Declare user choice as global scope
let choiceArr = [];

// Set default password character length
var charLength = 8;
// Assign values in arrays for password
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7','8', '9', '0'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '-', '+', ':', '<', '>', '?'];

// 1. Prompt the user with a series of password criteria:
function getPrompts() {
  // reset choiceArr to be empty array
  choiceArr = [];

  charLength = parseInt(prompt("Please pick a character length between 8 < 128 characters!"));
  // parseInt added to convert to integer or NaN 
   if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    //  Verify length conditions are acceptable
     alert("You must choose a number between 8 < 128! Please pick again!");
    //  Stop function
     return false;
   }
  //  proceed to add Uppercase choice array
   if(confirm("Would you like to include Uppercase Letters in your password?")) {
    choiceArr = choiceArr.concat(upperCase);
   }
  //  proceed to add Lowercase choice array
   if(confirm("Would you like to include Lowercase Letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCase);
   }
   //  proceed to add Number choice array
   if(confirm("Would you like to include Numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
   }
   //  proceed to add Special Characters choice array
   if(confirm("Would you like to include Special Characters in your password?")) {
    choiceArr = choiceArr.concat(specialChar);
    // if all conditions met successively, return true to proceed to truePrompt variable
    return true;
}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
// Verify acceptable prompt criteria return true
  var truePrompts = getPrompts();
  // if getPrompts is true, proceed to generatePassword function
    if (truePrompts) {
      var uniquePassword = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = uniquePassword;
    }
    else {
      passwordText.value = "";
    }
}

// Test Click Functionality 
function generatePassword() {
  // test click to console log
  // console.log("Generate Password Button is Clicked!");
  var uniquePassword = "";
  // based on the getPrompt user input choiceArr
  for(var i = 0; i < charLength; i++ ) {
    // incrementally add random charArr index up to max charLength
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      uniquePassword = uniquePassword + choiceArr[randomIndex];
  }

  return uniquePassword;
}






