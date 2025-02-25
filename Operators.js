//Operators are used to do the comparison, limitations etc, almost all known operators are present in javascript

//&&, ||, !, =, ==, >, <, >=, =<, <>, !=,

//=== |> is used to compare value as well as the type

//== |> only compares the value not type

var age = 18;
var validDocs;

if(validDocs && age === 18){
    console.log("Yes! its a valid voter")
}else{
    console.log("No! not a valid voter")
}


//ternary operator => ?

// statement ? true(job to do when statement is true): false(job to do when statement is false)

validDocs && age === 18 ? console.log("Yes! its a valid voter"): console.log("No! not a valid voter")

//

for (var index = 0; index < 5; index++) {
    
    //settimeout is a timeout function provided to add delay
    setTimeout(function () {
        console.log("in loop", index)
    }, 1000) //second parameter is in milli-seconds
    
}

console.log(index)