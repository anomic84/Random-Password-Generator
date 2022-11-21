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

    const template = [];

    if (userWantsNumbers) {
        for (let i = 0; i < numberList.length; i++) {
            template.push(numberList[i]);
        }
    }

    if (userWantsSymbols) {
        for (let i = 0; i < symbolList.length; i++) {
            template.push(symbolList[i]);
        }
    }

    if (userWantsLowercase) {
        for (let i = 0; i < lowercaseList.length; i++) {
            template.push(lowercaseList[i]);
        }
    }

    if (userWantsUppercase) {
        for (let i = 0; i < uppercaseList.length; i++) {
            template.push(uppercaseList[i]);
        }
    }

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        password += String.fromCharCode((getRandomItem(template)));
    }
    return password;

}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

// var optionsCart = []

// const password = generatePassword(userWantsNumbers, userWantsSymbols, userWantsLowercase, userWantsUppercase){
//     if (userWantsNumbers) cha
// }

// for (var i = 0; i < lowercaseList.length; i++) {
//     uppercaseList[i] = lowercaseList[i].toUpperCase()
// }

// if (userWantsNumbers === true) {
//     optionsCart.push(numberList)
// }

// if (userWantsSymbols === true) {
//     optionsCart.push(symbolList)
// }

// if (userWantsLowercase === true) {
//     optionsCart.push(lowercaseList)
// }

// if (userWantsUppercase === true) {
//     optionsCart.push(uppercaseList)
// }

// var generatedPassword = ""

// for (var i = 0; i < passwordLength; i++) {
//     var randomList = getRandomItem(optionsCart)
//     var randomChar = getRandomItem(randomList)
//     console.log(randomChar)
// }


// }



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
