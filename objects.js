// Object as class, we can create an object with details of key, value pair
// An object is the reference pointer holds the value via properties defined inside the object
// new Object() - instance object, Object.create()
// {} - this is an object

//create an object with some properties and functions to explain the behavior
var Employee = {
    FirstName : "Jason",
    Address : "Somewhere in the US",
    EmpID : "007",
    getEmployeeDetails : function () {
        return `First Name is - ${this.FirstName} 
                Address is - ${this.Address} 
                Employee ID is - ${this.EmpID}
                `
    }
}

// var empObj = new Employee()
// console.log(Employee.getEmployeeDetails())

//we can use this class directly with Employee variable or can use it to create new class

//1. By using new Object

// var empObj = new Object(Employee) //create a constructor of the class and allow inheriteance and polymorphism

// empObj.FirstName = "Mike"

// empObj.designation = "Software Engineer"

// console.log(Employee.getEmployeeDetails())
// console.log(empObj.getEmployeeDetails())

// empObj.getEmployeeDetails = function () {
//     return `First Name is - ${this.FirstName} 
//                 Address is - ${this.Address} 
//                 Employee ID is - ${this.EmpID}
//                 Designation is - ${this.designation}`
// }

//2. By using Object.create

var empObj = Object.create(Employee) //create a constructor of the class and allow inheriteance and polymorphism

empObj.FirstName = "Mike"

empObj.designation = "Software Engineer"

console.log(Employee.getEmployeeDetails())
console.log(empObj.getEmployeeDetails())

empObj.getEmployeeDetails = function () {
    return `First Name is - ${this.FirstName} 
                Address is - ${this.Address} 
                Employee ID is - ${this.EmpID}
                Designation is - ${this.designation}`
}

console.log(empObj.getEmployeeDetails())

//prototype object attached with functions and object literals allow to build a chain of inheritance in javascript classes

console.log(empObj._proto_)

//3. Empty object - will have prototype

// var EmptyClass = Object.create()

//4. Null constructor object - will not have prototype


var NullCtrClass = Object.create(null)

//create a student object
//set some properties and display the information in
//inherited object - SoftwareEngineer

var student = {
    firstName: "firstName",
    lastName: "lastName" ,
    studentID: 0,
    class:"General",    
    getStudentDetails : function () {
        return `First Name is - ${this.firstName} 
                Last Name is - ${this.lastName} 
                Student ID is - ${this.studentID}
                Student class is - ${this.class}
                `
    }
}

var mathStudent = Object.create(student)
mathStudent.studentID = 1
mathStudent.class = "Math"
console.log(student.getStudentDetails())
console.log(mathStudent.getStudentDetails())

//5. Merging and preserving the imutability

var user = {name: "Dat", id: 2025, address: "Somewhere in Chicago"}
var product = {name: "Dat", id: 2025, deliveryAddress: "Somewhere in NY", product:"some electronic product"}

//we need to create the final object with details of delivery proposed

var deliveryData;
// deliveryData = {user,product}
// console.log(deliveryData)

deliveryData = Object.assign(user,product)

console.log(deliveryData)