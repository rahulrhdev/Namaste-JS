// What is call,apply and bind method?
// Call,bind and apply are best to solve questions involving 'this' keyword
// var obj = { name: 'Rahul' }

// function sayHello(age, profession) {
//     return 'Hello ' + this.name + ' ' + age + " " + 'is ' + profession 
// }

// console.log(sayHello.call(obj, 25, 'FE Dev'))
// console.log(sayHello.apply(obj,[25, 'FE Dev']))

// const bindEx = sayHello.bind(obj)
// console.log(bindEx(25, 'FE DEV'))

// const person = {name: 'Rahul'}
// function sayHi(age) {
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person, 25))
// console.log(sayHi.bind(person, 25))


// const age = 10

// var person = {
//     name: 'Rahul',
//     age: 20,
//     getAge: function () {
//         return this.age
//     }
// }

// var person2 = {age: 25}
// console.log(person.getAge.apply(person2))


// Print all animals
// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Queen' }
// ]

// function printAnimals(i) {
//     this.print = function () {
//         console.log(`# ${i} ${this.species} : ${this.name}`)
//     }
//     this.print()
// }

// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i)
// }


//  Append an array to another array

// const array = ['a', 'b']
// const elements = [0,1,2]

// array.push.apply(array, elements)
// console.log(array)


// FInd min/max numbers in an array
// const numbers = [5, 6, 2, 3, 7]
// console.log(Math.max(3,5,2,1))
// console.log(Math.max(numbers))
// console.log(Math.max.apply(null,numbers))
// console.log(Math.min.apply(null,numbers))

// function f() {
//     console.log(this)
// }
// let user = {
//     g: f.bind(null)
// }
// user.g() // window object

// Bind chainning
// function f () {
//     console.log(this.name)
// }
// f = f.bind({ name: 'John' }).bind({ name: 'Annu' })
// f() // John can only bind once cannot do bind chainning


// Fix the code to make it work properly

// function checkPassword(success, failed) {
//     let password = prompt('Password?', '')
//     if (password == 'Hello123') success()
//     else failed()
// }

// let user = {
//     name: 'Rahul',

//     loginSuccessful() {
//         console.log(`${this.name} logged in`)
//     },

//     loginFailed() {
//         console.log(`${this.name} failed to log in`)
//     }
// }

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user))


// Partial application for login function

// function checkPassword(ok, fail) {
//     let password = prompt('Password?', '')
//     if (password === 'Hello123') ok()
//     else fail()
// }

// let user = {
//     name: 'Rahul',
//     login(result) {
//         console.log(this.name + (result ? ' login successful' : ' login failed'))
//     }
// }

// checkPassword(user.login.bind(user, true), user.login.bind(user, false))


// With Arrow functions

const age = 10
// var age = 10
var person = {
    name: 'Rahul',
    age: 20,
    getAgeArrow: () => console.log(this),
    getAge: function() {
        console.log(this.age)
    }
}

var person2 = { age: 26 }
// person.getAgeArrow.call(person2) // undefined behaves as a normal arrow function binding
// person.getAge.call(person2) // 24


// Polyfill for call

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + 'Its not callable')
    }
    context.fn = this
    context.fn(...args)
}


person.getAge.myCall(person2)


// PolyFill for apply

Function.prototype.myApply = function (context = {}, args=[]) {
     if (typeof this !== 'function' || !Array.isArray(args)) {
        throw new Error(this + 'Its not callable')
    }
    context.fn = this
    context.fn(...args)
}


// Polyfill for bind

Function.prototype.myBind = function (context= {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + 'Is not callable')
    }
    context.fn = this
    return function (...newArgs) {
        return context.fn(...newArgs)
    }
}

const bindEx = person.getAge.myBind(person2)
bindEx()