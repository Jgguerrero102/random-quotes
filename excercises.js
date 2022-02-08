//Normal named function

import { flattening } from "./excercises1"

function aFunction(){
    console.log("A function was run")
    return 1
}

let functionReference = aFunction

function myHigherOrderFunction(functionParameter) {
    for  (let i = 0; i < n; i++) {
    functionParameter()
    }
}

let arrayValues = [1, 2, 3, 4]
for (let item of arrayValues){
    console.log(item)
}

//console.log(aFunction())
//console.log(functionReference())
//console.log(myHigherOrderFunction(functionReference, 3))

let aFunc = function() {
    return Math.random()
}
aFunc()
aFunc = undefined

let arrowFunction3 = () => { 
    let ranNumber = Math.random ()
    return { a: ranNumber }
}
//console.log(arrowFunction3())

let arrayValues = [1, 2, 3, 4]
for (let item of arrayValues) {
    console.log(item)
}

arrayValues.forEach((item => console.log(item)))

// 3 - 1 flattening(list)
//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
export function flattening(list){

}
// → [1, 2, 3, 4, 5, 6]
