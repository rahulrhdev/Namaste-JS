// Object binding
// Implicit binding 
// const result  = this.getResult()

// Explicit binding
// const result = personObj.call(personFunc)

// What is 'this' keyword
// 'this' refers to the object that is executing the current function
// In the global context, 'this' refers to the global object (window in browsers, global in Node.js)
// console.log(this); // In browsers, this will log the Window object

// this.a = 5
// const getParams = () => {
//     // const a = 9
//     this.a = 10
//     console.log(this.a)
// }

// function getParamsFunc() {
//     // const a = 8
//     this.a = 8
//     console.log(this.a)
// }

// getParams()
// getParamsFunc()

// this.name = 'Ria'
// let user = {
//     name: 'Rahul',
//     age: 24,
//     childObj: {
//         newName: 'Coder',
//         getDetails() {
//             console.log(this.newName, 'and', this.name) // Coder and undefined (Normal functions point only to its immediate parent)
//         }
//     },
//     getDetails() {
//         console.log(this.name)
//     },
//     getDetailsArr: () => {
//         console.log(this)
//     },
//     getDetailsNew() {
//         const nestedArrow = () => console.log(this.name)
//     }
// }

// user.getDetails()
// user.childObj.getDetails()
// user.getDetailsArr()


// class user {
//     constructor(n) {
//         this.name = n
//     }
//     getName() {
//         console.log(this.name)
//     }
// }

// const User = new user('Rahul')
// console.log(User)
// User.getName()


// Questions
// Whats the output

// const user = {
//     firstName: 'Rahul',
//     getName() {
//         const firstName = 'Rahul Haveri'
//         return this.firstName // points to Rahul parent scope
//     }
// }

// console.log(user.getName())

// function makeUser() {
//     return {
//         name: 'John',
//         ref() {
//             return this
//         }
//     }
// }

// let user = makeUser()
// console.log(user.ref().name) // nothing as this in ref points to parentscope i.e the window object
// console.log(user)


// Whats the output 
// const user = {
//     name: 'Rahul Haveri',
//     logMessage() {
//         console.log(this.name)
//     }
// }
// setTimeout(user.logMessage, 1000) // prints nothing / undefined as user.logMessage is the callBack which points to the global this/window complete function is copied in setTimeout which does not access to user class
// setTimeout(() => user.logMessage(), 1000)

// const user = {
//     name: 'Rahul',
//     greet() {
//         return `Hello ${this.name}`
//     },
//     fareWell: () => {
//         return `Goodbye ${this.name}`
//     }
// }

// console.log(user.greet())
// console.log(user.fareWell())


// let calculator = {
//     read() {
//         this.a = +prompt('a =', 0)
//         this.b = +prompt('b =', 0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.mul())

// var length = 4

// function callBack() {
//     console.log(this.length)
// }

// const object = {
//     length: 5,
//     method() {
//         fn()
//         arguments[0]()
//     }
// }
// // object.method(callBack) // 4 as its in window
// object.method(callBack, 2, 3) // 3 as it prints the no of arguments arrays


// Implement calc
// const calc = {
//     total: 0,
//     add(a) {
//         this.total += a
//         return this
//     },
//     multiply(a) {
//         this.total *= a
//         return this
//     },  
//     subtract(a) {
//         this.total -= a
//         return this
//     },
// }
// const result = calc.add(10).multiply(5).subtract(30).add(10)
// console.log(result.total)
