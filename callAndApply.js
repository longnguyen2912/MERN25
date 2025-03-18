//Call and Apply are the extended functions present in the function definition which allows to change or update the scope of the 
// given function by passing the object as a parameter

//Call -function.call is used to accept first parameter as an object which we want to apply as scope in the function,
// and second and subsequent parameters will be used to pass function parameters

//Apply - function.apply is used to accept first parameter as an object which we want to apply as scope in the function,
// but the second parameter



// globalThis.FName = "Mike"

var user1 = {FName:"Eric", Location:"Somewhere in Australia", Age:20};
var user2 = {FName:"Jeremy", Location:"Somewhere in France", Age:21};


function PrintInfo(msg, additionalInfo) {
    // console.log(this) //the scope or the context of execution - global when function is not attached to any object
    console.log(`
        ${msg}
        ${additionalInfo}
        ${this.FName}
        ${this.Location}
        ${this.Age}
        `)
    // console.log(this.FName)
}

//PrintInfo() //this execution of function happens in a global scope, which is JS environment or nodejs environment

PrintInfo.call(user1, "Software Engineer", "Mernstack Expert")
PrintInfo.call(user2, "IT Professional", "AI Expert")

var Car = {Brand: "Tesla", Name:"AI-Tesla", Price:"$100000"}
var Jeep = {Brand: "Tesla Ten", Name:"Manuel", Price:"$150000"}


function VehicleInfo(make, model, year, gears, automatic, groundClearance, airbags, crushTestValue){
    console.log(`
        ${make}
        ${model}
        ${year}
        ${gears}
        ${this.Brand}
        ${this.Name}
        ${this.Price}
        `)
}

//lets say all informations about vehicle accepted in a parameter we'll get from API
// in the form of array

var basicInfo = ["US", "First","2025","6","Yes","10 inches", "5","4.5"]

VehicleInfo.call(Car, "US", "First","2025","6")

VehicleInfo.apply(Car, basicInfo)

var ArithmeticData = {msg:"We are doing sum",data:"This is array list"}

var Sum = function(n1,n2,n3,n4,n5){
    var sum = n1+n2+n3+n4+n5;
    return console.log(`
        ${this.msg} 
        ${this.data} 
        ${sum}`) 
}

var numList = [1,2,3,4,5]
Sum.apply(ArithmeticData,numList)

//creat