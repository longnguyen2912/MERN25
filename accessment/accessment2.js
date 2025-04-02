// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
const heroes = [
    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
    { name: 'Batman',         family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
    { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
    { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
    { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]
// a. Get heroes who are not evils
const goodHeroes = heroes.filter(hero => !hero.isEvil);
console.log(goodHeroes);
// b. Print Unique family names
const uniqueFamilies = [...new Set(heroes.map(hero => hero.family))];
console.log(uniqueFamilies);
// c. Print Hero Names from given objects, and append sir in each of them before printing
const sirHeroes = heroes.map(hero => `Sir ${hero.name}`);
console.log(sirHeroes);
// d. Do we have any hero in Marvel Family who is not evil
const hasGoodMarvelHero = heroes.some(hero => hero.family === 'Marvel' && !hero.isEvil);
console.log(hasGoodMarvelHero);



//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one
function multiplyNumbers(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}
function multiplyUsingApply(...numbers) {
    return multiplyNumbers.apply(null, numbers);
}
console.log(multiplyUsingApply(1, 2, 3, 4, 5));

//3. Print the last name through destructuring and add a contact number:9119119110 as well
const personn = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
const { userDetails: { last } } = personn;
const contactNumber = "9119119110";
console.log(`Last Name: ${last}`);
console.log(`Contact Number: ${contactNumber}`);

//4. Give me an example of const data manipulation
const numbers = [1, 2, 3, 4];
numbers[1] = 10;
numbers.push(5);
console.log(numbers); 

//5. What is the difference between for-of and for-in show with examples
let arr = [10, 20, 30];
let obj = { a: 1, b: 2, c: 3 };

console.log('for-in on array:');
for (let index in arr) {
    console.log(index); // Outputs keys (indices)
}

console.log('for-of on array:');
for (let value of arr) {
    console.log(value); // Outputs values
}

console.log('for-in on object:');
for (let key in obj) {
    console.log(key, obj[key]); // Outputs keys and values
}

//6. Give me an example of bind and write its usage, comparison with arrow function

const person = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
};

const greetBound = person.greet.bind(person);
greetBound();

const greetArrow = () => console.log(`Hello, ${person.name}`);
greetArrow();

//7. Create an example showing usage of event loop in concurrent execution cycle
console.log('Start');
setTimeout(() => console.log('Timeout callback'), 0);
Promise.resolve().then(() => console.log('Promise resolved'));
console.log('End');

//8. create an example showing usage of short hand and default param.
const user = (name = 'Guest', age = 18) => ({ name, age });
console.log(user('Bob'));
console.log(user());

//9. Create two objects with some properties and merge them using Object method and ES6 way
const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };
const merged1 = Object.assign({}, obj1, obj2);
const merged2 = { ...obj1, ...obj2 };
console.log(merged1, merged2);

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a'));
map.delete('b');
map.clear();

let set = new Set();
set.add(1);
set.add(2);
console.log(set.has(1));
set.delete(2);
set.clear();

//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(['let', 'const', 'spread', 'rest', 'arrow functions']), 2000);
    setTimeout(() => reject('Promise rejected'), 3000);
});

//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)

const multiply = (...numbers) => numbers.reduce((acc, num) => acc * num, 1);
console.log(multiply(1, 2, 3, 4));

//13. Use the question #11 to build promises using async and await - with multithread

async function asyncExample() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
asyncExample();

//14. Create an example of generator function of your choice
function* simpleGenerator() {
    yield "First value";
    yield "Second value";
    yield "Third value";
}

let genObj = simpleGenerator();
console.log(genObj.next()); // { value: 'First value', done: false }
console.log(genObj.next()); // { value: 'Second value', done: false }
console.log(genObj.next()); // { value: 'Third value', done: false }
console.log(genObj.next()); // { value: undefined, done: true }

//15. Explain your knowledge on function and object protoype what is the purpose of the same - example

//they are to the concepts for inheritance and object to be handled in javascript
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person('Em', 30);
const person2 = new Person('Long', 25);

person1.greet();
person2.greet();