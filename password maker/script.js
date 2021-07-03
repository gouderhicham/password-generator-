let range = document.querySelector("#characterAmountRange")
let numberRange = document.querySelector("#characterAmountNumber")
range.addEventListener("input", changeValue)
numberRange.addEventListener("input",changeValue)
const form = document.querySelector("form")
let includeNumbers = document.querySelector("#includeNumbers")
let Upper = document.querySelector("#includeUppercase")
let sym = document.querySelector("#includeSymbols")
// values for function bellow needed to check if the boxes is checked or not 
let password , numberChecked , symChecked , upperchecked
// char codes lists
let UpperChars = getChars(65 , 90)
let lowerChars = getChars(97 , 122)
let numberChars = getChars(48 , 57)
let symChars = getChars(33 , 47).concat(getChars(58, 126))
//update range input
function changeValue(e) {
    let value = e.target.value
    range.value = value
    numberRange.value = value
}
form.addEventListener("submit" , (e)=> {
    e.preventDefault()
    let lettersRange = range.value
    upperchecked = Upper.checked
    numberChecked = includeNumbers.checked
    symChecked = sym.checked
    password = generatePass(lettersRange , upperchecked , numberChecked , symChecked) 
    document.querySelector(".password-display").innerHTML = password.join("")
})
function generatePass(lettersRange , upperchecked , numberChecked , symChecked) {
    let charCodes = lowerChars
    let finalCodes = []
    if (upperchecked) {
        charCodes = charCodes.concat(UpperChars)
    }
    if (numberChecked) {
        charCodes = charCodes.concat(numberChars)
    }
    if (symChecked) {
        charCodes = charCodes.concat(symChars)
    }
    for (let i = 0; i < lettersRange ; i++) { 
        let one = charCodes[Math.floor(Math.random() * charCodes.length)]
        console.log(one);
        finalCodes.push(String.fromCharCode(one))
    }
    return finalCodes
}
// get char codes at once
function getChars(start , end) {
    let newArray = []
    for (let i = start; i < end; i++) {
        newArray.push(i)
    }
    return newArray
}