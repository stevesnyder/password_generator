// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables declared and assigned a value
        
//arrays containing different accepted characters
var specialChar = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\", "\""];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];




            //-generate password

                //-declare variable with a value of an empty array.
                //-declare variable for generated password.
                //-conditional statements to ensure all desired characters are included in password and add all desired characters to empty array.
                //-loop that runs x times, x being desired length of password.

                    //-each time loop runs
                        //~select a random character from desired character array.
                        //~add the character to generated password variable.

                //return generated password value.

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
