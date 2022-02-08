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



function myHigherOrderFunction(parameterFunction) {
    return parameterFunction()
}

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

//
function flattening(inputList)

console.log(myFunction())
console.log(myFunc())