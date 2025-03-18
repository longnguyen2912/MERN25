//October - MERNStack Session - Assessment Number 1 - 2nd October 2024

//Q1. Create a file with name basics and show all the features that you know about javascript? (minimum 5 and maximum 8 topics)
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance
const basics = {
    hoisting: "JavaScript moves variable and function declarations to the top of their containing scope before execution.",
    eventLoop: "Handles asynchronous operations by placing tasks in a queue and executing them after the main execution stack is clear.",
    closures: "A function that has access to variables from its outer scope even after the outer function has returned.",
    callAndApply: "are the extended functions present in the function definition which allows to change or update the scope of the given function by passing the object as a parameter",
    overloading: "is the oops feature which on the basis of different parameters gives different variation of a function, a same name function can be used in different ways by just changing the number and type of parameters"
};
console.log(basics);


//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
let variable;

variable = "Robert ";
console.log("Value:", variable, "Type:", typeof variable);

variable = 0.0266;
console.log("Value:", variable, "Type:", typeof variable);

variable = false;
console.log("Value:", variable, "Type:", typeof variable);

variable = { myname: "Test Me" };
console.log("Value:", variable, "Type:", typeof variable);

variable = 25166665;
console.log("Value:", variable, "Type:", typeof variable);

variable = undefined;
console.log("Value:", variable, "Type:", typeof variable);

variable = true;
console.log("Value:", variable, "Type:", typeof variable);

variable = "Robert Jr.";
console.log("Value:", variable, "Type:", typeof variable);

variable = null;
console.log("Value:", variable, "Type:", typeof variable);

variable = {};
console.log("Value:", variable, "Type:", typeof variable);

variable = -32767;
console.log("Value:", variable, "Type:", typeof variable);


//Q3. Create a function with name showUs
// erInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function
function showUserInfo(firstName,lastName,age) {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`);
}
showUserInfo("Long", "Nguyen", 28);

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!
function doAddition(x1,x2,x3) {
    return x1+x2+x3;
}
console.log(doAddition(2,3,4)); // 9  as it returns the sum of 3 numbers
console.log(doAddition(2));  //NaN because only 1 parameter is declared
console.log(doAddition(2.3,3)); //NaN because only 2 parameter is declared
console.log(doAddition("first", 2, "three")); //first2three because String concatenation

//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
function greet(name) {
    return function() {
        console.log("Hello, " + name + "!");
    };
}

const sayHelloToEm = greet("Em");
sayHelloToEm();
// b. hoisting, 
sayHello();

function sayHello() {
    console.log("Hello, Em!");
}
// c. constructor function

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

const employee1 = new Employee("Em", 28);
console.log(employee1.name);
console.log(employee1.age);

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?
// call() and apply() are used to call a function with a specified this value and arguments, but call() takes arguments individually, while apply() takes them as an array.

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.
const student = {
    name: "Em",
    greet: function() {
    console.log(`Hello, my name is ${this.name}`);
    },
    delayedGreet: function() {
    setTimeout(this.greet.bind(this), 1000);
    }
};

student.delayedGreet();


//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?
const player = Object.create(null);
player.name = "Em";
player.age = 28;

console.log(student);
//Q9. How do we merge different objects properties using Object class function
// User Information object
var userInfo = {
    userId: 101,
    username: "em_nguyen",
    email: "emnguyen@example.com",
    location: "San jose"
};

// Subscription Details object
var subscriptionDetails = {
    subscriptionPlan: "Premium",
    renewalDate: "2025-06-15",
    isActive: true
};

// Payment History object
var paymentHistory = {
    lastPaymentDate: "2025-03-01",
    totalSpent: "$1500",
    paymentMethod: "Credit Card"
};

// Merge all objects into userAccount using Object.assign
var userAccount = Object.assign({}, userInfo, subscriptionDetails, paymentHistory);

console.log(userAccount);

//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned