// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomItem(list) {
    return list[randomInt(0, list.length - 1)]
}


function generatePassword() {

    var userInput = window.prompt("How many characters do you want in your password?");

    var passwordLength = parseInt(userInput);

    if (isNaN(passwordLength)) {
        window.alert("That's not a number!")
        return
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be between 8 and 128 characters")
        return
    }

    var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
    var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
    var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
    var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

    const numberList = arrayFromLowToHigh(48, 57)
    const symbolList = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(65, 90))
    const lowercaseList = arrayFromLowToHigh(97, 122)
    const uppercaseList = arrayFromLowToHigh(65, 90)
    const password = generatePassword(userWantsNumbers, userWantsSymbols, userWantsLowercase, userWantsUppercase){
        if (userWantsNumbers) cha
}

// ---------------------conditional statements if, if else's, and finally last if else "please pick one password variable"-------------------/


//T T T T
if ()

//T T T F

//T T F F

//T F F F

//T F T F

//T F T T

//T F F T

//T T F T

//F F F F

//F F F T

//F F T T

//F T T T

//F T F T

//F T F F

//F T T F

//F F T F


















function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

var optionsCart = []

// const password = generatePassword(userWantsNumbers, userWantsSymbols, userWantsLowercase, userWantsUppercase){
//     if (userWantsNumbers) cha
// }

// for (var i = 0; i < lowercaseList.length; i++) {
//     uppercaseList[i] = lowercaseList[i].toUpperCase()
// }

if (userWantsNumbers === true) {
    optionsCart.push(numberList)
}

if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
}

if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
}

if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
}

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    console.log(randomChar)
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
