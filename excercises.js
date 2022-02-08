//Normal named function

function aFunction(){
    console.log("A function was run")
    return 1
}

let functionReference = aFunction

function myHigherOrderFunction(functionParameter) {
    return functionParameter()
}
