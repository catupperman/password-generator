// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array Options for the computer to choose from randomly.
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//will the numbers need to be in a string?  Will this cause an error with Math.floor/random?

//GOAL: When clicking password button it generates a password, series of prompts pswd criteria


//TODO: Pswd criteria: Length of atleat 8 characters, no more than 128
//TODO: Prompts for character type, lower, uppercase, numeric, and/or special characters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Math.floor(Math.random() * specialChar.length)
  //Math.floor(Math.random() * upper.length)
  //Math.floor(Math.random() * lower.length)
  //Math.floor(Math.random() * numbers.length)


  passwordText.value = password;

}

//How to get it when clicking in the password space of the webpage?
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
window.confirm("Would you like to generate a password?")
//if statement?


//TODO: when answering  each prompt input should be validated and at least one character type should be selected
//TODO: all prompts are answered, a password is generated that matches the selected criteria
//TODO: the password is generated, it is either displayed in an alert or written to the page
