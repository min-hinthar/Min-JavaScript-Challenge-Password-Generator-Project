// Assignment code here
// Store user prompt choice input
var choiceArr = [];

// Set default password character length
var charLength = 8;
// Assign values in arrays for password
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7','8', '9', '0'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '-', '+', ':', '<', '>', '?'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
// Verify acceptable prompt criteria return true
  var truePrompts = getPrompts();
  // if getPrompts returns true
    if (truePrompts) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
}

// Test Click Functionality 
function generatePassword() {
  // test click to console log
  console.log("Generate Password Button is Clicked!");

  return "Your Unique Randomly Generated Password!";

}

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
  //  proceed to Uppercase choice
   if(confirm("Would you like to include Uppercase Letters in your password?")) {
    choiceArr = choiceArr.concat(upperCase);
   }
  //  proceed to Lowercase choice
   if(confirm("Would you like to include Lowercase Letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCase);
   }
   //  proceed to Number choice
   if(confirm("Would you like to include Numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
   }
   //  proceed to Special Characters choice
   if(confirm("Would you like to include Special Characters in your password?")) {
    choiceArr = choiceArr.concat(specialChar);
    // if all conditions met successively, return true to proceed to generatePassword function
    return true;
}
}





