console.log("sum of 5+5 is ", 5+5)
// var iknowJS = confirm("do you know js");
// console.log(iknowJS);

var counter = 0;

console.log(counter);

function incrementCounter(){
    counter++;
    console.log(counter)
    if(counter<10000)
        incrementCounter()
}

incrementCounter();

console.log(counter);

var counter = 0; //reassignment can happen with var

console.log(counter);

// semicolons are optional;

// dynamic typing - is present to assign any data type to the variable

// autocasting - it also allows to reassign and change the data type at the moment of reassignment

// cls can be used to clear terminal data

// ctrl + c -to stop indefinite execution

// for commenting, we use ctrl+/ (toggle)

//multiline comment

/*
var counter = 0;
console.log(counter)
*/

//for, foreach, while, do-while all loops present in JS

//typeof - var name is used to check the datatypes

//array can be created, and are dynamic

//identifiers/variables - case sensitive

var numbers = [1,2,3,4,5]
var my_Name = "Some name"
var My_Name = "Some other name"

//space not allowed, special chars apart from _,$ , others are not allowed

var $myName = "underscore Name",
_myName = "Dollar Name",
my_Name5 = "underscore Name"

//5myname - starting from number is not allowed