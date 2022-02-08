// What is a function in Javascript

function myFunction() {
    return 1;
}

let myFunc = function () {
    return 1;
}

// Arrow Function (Return value directly)
let myFuncArrow = a => a + 1

// Arrow Function (Return value directly)
let myFuncArrow2 = () => {return { a: 5 } }



function myHigherOrderFunction() {
    return parameterFunction()
}

console.log(myFunction())
console.log(myFunc())