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








// const passwordEl = document.getElementById('password');
// const lengthEl = document.getElementById('length');
// const upperEl = document.getElementById('uppercase');
// const lowerEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateBtn = document.getElementById('generate');

// generateBtn.addEventListener('click', () => {
//     const length = +lengthEl.value;
    
//     console.log(typeof length);
// });


// Functions to Generate Random Password Criteria:
// function genRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function genRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function genRandomNumbers() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function genRandomSymbols() {
//   const symbols = "#!$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//   return symbols[Math.floor(Math.random() * symbols.lenght)];
// }
