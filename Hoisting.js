// JS is interpreted language and partially compiled language
// It is not compiled language
// Hoisting is the process of partially compiling and pulling all the variables and functions on top and having an information
// about them , even if they are present in the last line of JS file
// Two types of hoisting are present
// 1. Variable hoisting- a variable is hoisted with a default value (undefined)
// 2. Functional hoisting- it is hoisted with its completed definition

console.log(myFancyVariable)

console.log(Add(4,4))

console.log(Sum(4,4))

console.log("I am a programmer!!")

var myFancyVariable = "This is just basic not fancy!"

console.log(myFancyVariable)

function Sum(p1,p2){
    return p1+p2
}

var Add = function(p1,p2){
    return p1+p2
}