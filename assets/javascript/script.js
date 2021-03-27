// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables declared and assigned a value
        
//arrays containing different accepted characters
var specialChar = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\", "\""];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword(){

  //declare variable for password length and character selection
  //-prompt user for length of password
  function length(){
    var passwordLength = prompt("How many characters would you like to include?", "8-129");
    if ((passwordLength >= 8) && (passwordLength <= 129)){
      return passwordLength;
    }
    else {
      alert("Please enter a number between 8 and 129");
      length();
    }
  }
  
  var passwordLength = length();

  
  function getCharacters(){
    //prompt user for character types
    var specialCheck = confirm("Do you want your password to include special characters?");
    var numericCheck = confirm("Do you want your password to include numeric characters?");
    var lowercaseCheck = confirm("Do you want your password to include lowercase characters?");
    var uppercaseCheck = confirm("Do you want your password to include uppercase characters?");
    
    //declare variable for combining arrays
    var charArray = [];
    var newCharArray = [];
    //add all desired characters to empty array.
    if ((specialCheck == false) && (numericCheck == false) && (lowercaseCheck == false) && (uppercaseCheck == false)){
      alert("Must include at least one character type");
      getCharacters();
    }   
    else { 
      if (specialCheck)
        charArray = charArray.concat(specialChar);
      if (numericCheck)
        charArray = charArray.concat(numericChar);
      if (lowercaseCheck)
        charArray = charArray.concat(lowercaseChar);
      if (uppercaseCheck)
        charArray = charArray.concat(uppercaseChar); 
    }
    return charArray;
  }
  
  var charArray = getCharacters();
  
  var randomArray = [];
  //generate password
  //loop that runs x times, x being desired length of password.
  for (i = 0; i < passwordLength; i++){
    randomArray[i] = charArray[Math.floor((Math.random() * charArray.length))];
  }
  
  var password = randomArray.join('');
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);