//Normal named function

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

//console.log(aFunction())
//console.log(functionReference())
console.log(myHigherOrderFunction(functionReference, 3))

let aFunc = function() {
    return Math.random()
}
aFunc()
aFunc = undefined

let arrowFunction = () => Math.random()
console.log(arrowFunction())
let arrowFunction2 = () => ({ a: 5 })
console.log(arrowFunction2())
let arrowFunction2 = () => { 
    let ranNumber = Math.random ()
    return { a: ranNumber }
}
console.log(arrowFunction())