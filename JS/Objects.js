// Objects in JS

// const user = {
//     name: 'Rahul',
//     age: 25,
//     'college or school' : 'BPIPS'
// }

// // delete user.age
// // console.log(user)


// const func = (function(a) {
//     delete a
//     return a
// })(5)
// console.log(func)

// const property = 'firstName'
// const name = 'Rahul'

// const user = {
//     [property]: name
// }

// console.log(user)

// Questions 
// const obj = {
//     a: 'one',
//     b: 'two',
//     a: 'three' // will take precedence and is considered
// }
// console.log(obj)

// Multiply numbers by 2
// let nums = {
//     a: 100,
//     b: 200,
//     title: 'My nums'
// }

// multiplyByTwo(nums)

// function multiplyByTwo(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] = obj[key] * 2
//         }
//     }
// }
// console.log(nums)

// Whats the output

// const a = {}
// const b ={ key: 'b' }
// const c = { key: 'c' }

// a[b] = 123
// a[c] = 456

// console.log(a[b])
// console.log(a)

// Whats JSON stringify and parse

// const user = {
//     name: 'Rahul',
//     age: 24
// }

// const strObj = JSON.stringify(user)

// console.log(strObj)
// const obj = JSON.parse(strObj)
// console.log(obj)

// whats the output?
// console.log([...'Rahul']) // ['R', 'a', 'h', 'u', 'l']

// // Whats the output
// const user = { name: 'Annu', age: 30 }
// const admin = {admin: true, ...user}

// console.log(admin) // {admin: true, name: 'Annu', age: 30}

// Whats the output?

// const settings = {
//     name: 'Rahul',
//     level: 20,
//     health: 90
// }

// const data = JSON.stringify(settings, ['level', 'health'])
// console.log(data) // {"level":20,"health":90}


// Whats the output
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// }

// console.log(shape.diameter(), shape.perimeter()) // 20 NaN

// Whats is destructuring in objects
// let user = {
//     name: 'Rahul',
//     age: 25,
//     fullName: {
//         first: 'Rahul',
//         last: 'Haveri'
//     }
// }

// const name = 'Riya'
// const { fullName: {first, last} } = user

// console.log(first, last)


// Whats the output 
// let c = { greeting: 'Hey' }
// let d

// d = c
// c.greeting = 'Hello'
// console.log(d.greeting) // Hello (due to object reference)


// Whats the output

// console.log({a: 1} == {a: 1}) // false
// console.log({ a: 1 } === { a: 1 }) // false This condition will always return 'false' since JavaScript compares objects by reference, not value.



// let person = { name: 'Lydia' }
// const members = [person]
// person.name = null
// console.log(members) // [{…}]0: {name: null}length: 1[[Prototype]]: Array(0)


// const value = {number: 10}

// const multiply = (x = {...value}) => {
//     console.log((x.number *= 2))
// }

// multiply() // 20
// multiply() // 20
// multiply(value) // 20
// multiply(value) // 40


// function changeAgeAndRef(person) {
//     person.age = 25
//     person = {
//         name: 'John',
//         age: 50
//     }
//     return person
// }

// const personObj1 = {
//     name: 'Alex',
//     age: 30
// }

// const personObj2 = changeAgeAndRef(personObj1)
// console.log(personObj1)
// console.log(personObj2)


// Whats shallow and deep copy of object 
// Shallow has still got access to atleast some of the properties of the parent object

// Deep copy completely clone an object to another object

// let user = {
//     name: 'Rahul',
//     age: 25,
//     fullName: {
//         first: 'Rahul',
//         second: 'Haveri'
//     }
// }

// // const objClone =  Object.assign({}, user.fullName) // note this will not clone nested objects
// // const objClone = JSON.parse(JSON.stringify(user.fullName))
// const objClone = {...user}

// objClone.fullName.first = 'Riya'
// console.log(user.fullName)
// console.log(objClone)