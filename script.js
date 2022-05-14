// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Test Click Functionality 
function generatePassword() {
  console.log("Generate Password Button is Clicked!");

// 1. Prompt the user with a series of password criteria:
//     a. Choice of length of password 8 < 128 characters,
//     b. Choice of Lowercase, Uppercase, Numeric, and/or Special Characters,  



// 2. Validate user input && 1 character type MUST be selected (ELSE error prompt),
//



// 3. Generated Password and display in alert or on page.
// 
// 


  return "Your Unique Randomly Generated Password!";
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
