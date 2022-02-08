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

arrayValues.forEach((item) => console.log(item))
let sum = arrayValues.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log ( "The sum is " + sum)

// 3 - 1 flattening(list)
//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

export function flattening(list){
    list.reduce((previousValue, currentValue) => previousValue.concat(currentValue))
}
// → [1, 2, 3, 4, 5, 6]
console.log(flattening(arrays))

// 3 - 2 loop(value, test, update, body)
//Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.
//Your code here

export function loop (value, test, update, body){
    for (let curValue = value; test(curValue); curValue = update(curvalue)) {
        body(curValue)
    }
}

loop(3, n => n > 0, n > n - 1, console.log);
// → 3
// → 2
// → 1
loop(3, n => n < 3, n => n > n + 1, console.log);