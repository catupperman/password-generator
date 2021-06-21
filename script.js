//GOAL: When clicking password button it generates a password, series of prompts pswd criteria
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array Options for the computer to choose from randomly.
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
//Special character \ and " don't work in an array. \ due to a break in the array and " due to the decriptions of string in the array.
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//numbers only affected by the the formula when specifically called for within a math equation
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function askForOptions() {
  //parseInt: analyzing a string with mathmatical properties; returning an integer
  var passLength = parseInt(prompt("How many characters would you like in  your password?"));
  console.log(passLength);
  //keeping the number greater than 8
  if (passLength < 8) {
    alert(" Character Number must be higher than 8");
    return;
  }
  //keeping the number less than 128
  if (passLength > 128) {
    alert("Character Number must be less than 128");
    return;
  }
  //needed to avoid user entering something other than a number.
  if (isNaN(passLength)) {
    alert("Must be a number value");
    return;
  }
  //variables to apply to the arrays in question
  var isLower = confirm("Would you like lowercase letters in your password?");
  var isUpper = confirm("Would you like UPPERCASE letters in your password?");
  var isNumber = confirm("Would you like Numbers in your password?");
  var isSpecial = confirm("Would you like Special Characters in your password?");
  //to avoid user from not chosing an option
  if (isLower === false && isUpper === false && isNumber === false && isSpecial === false) {
    alert("Must Choose one character type");
  }
  var Options = {
    passLength, isLower, isUpper, isNumber, isSpecial
  }
  //resets the options
  return Options;
}
//where the magic happens
function generatePassword() {
  var options = askForOptions();
  console.log(options);
  //putting the arrays in one bucket to be dispersed from the users choosing
  var totalArray = [];
  var results = [];
  //concat to merge the arrays together, creating a new array pool that can be inter-changed.
  if (options.isLower === true) {
    totalArray = totalArray.concat(lower);
  }
  if (options.isUpper === true) {
    totalArray = totalArray.concat(upper);
  }
  if (options.isNumber === true) {
    totalArray = totalArray.concat(numbers);
  }
  if (options.isSpecial === true) {
    totalArray = totalArray.concat(specialChar);
  }
  console.log(totalArray);
  //for loop to generate the random password based off of the users choosing
  for (var i = 0; i < options.passLength; i++) {
    var index = Math.floor(Math.random() * totalArray.length);
    console.log(index);
    var digit = totalArray[index];
    results.push(digit);
  }
  //removed the commas
  return results.join("");
}
// Add event listener to generate button- google MDN- "sets up a function that will be called whenever the specified event is delivered to the target."
generateBtn.addEventListener("click", writePassword);
