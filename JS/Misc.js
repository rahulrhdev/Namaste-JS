// Closures in JS
// Lexical Scope

var name = 'Rahulrh'

// global scope
// function local() {
//     var name = 'Rahul'
//     function displayName() {
//         alert(name)
//     }
//     return displayName
// }
// // var myFunc = local()
// // myFunc()
// local()()


// let count = 0
// (function printCount() {
//     if (count === 0) {
//         let count = 1
//         console.log(count)
//     }
//     console.log(count)
// })()

// function createBase(base) {
//     return function answer(num) {
//         console.log(num + base)
//     }
// }

// var addSix = createBase(6)
// addSix(10)
// addSix(21)

// // Optimizing Functions using closures
// function find() {
//     let a = []
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i
//     }
//     return function (index) {
//         console.log(a[index])
//     }
// }

// const closureForOptimum = find()
// closureForOptimum(7)
// closureForOptimum(50)

// Block scope and setTimeout

// function a() {
//     for (var i = 0; i < 3; i++) { // use let to get 0,1,2 because let is block whereas var is function scope
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
// }

// a()

    // using var by using closure
    // for (var i = 0; i < 3; i++) {
    //     function inner(i) {
    //         setTimeout(() => {
    //             console.log(i)
    //         }, i * 1000)
    //     }
    //     inner(i)
    // }


// How to use a closure to create private counter/variable
// function counter() {
//     var _counter = 0
//     function add (increment) {
//         _counter += increment
//     }
//     function retrive() {
//         console.log("Counter = " + _counter)
//     }
//     return {
//         add, retrive
//     }
// }

// const c = counter()
// c.add(5)
// c.add(10)
// c.retrive()

// What is a module pattern
// var Module = (function() {
//     function privateMethod () {
//         console.log('Private')
//         // return 6
//     }
//     return {
//         publicMethod: function () {
//             console.log('Public')
//             // console.log(privateMethod())
//         }
//     }
// })()

// Module.publicMethod()
// Module.privateMethod()


// Make this run only once
// let view
// function likeTheVideo() {
//     let called = 0
//     return function() {
//         if (called > 0) {
//             console.log('Already followed')
//         } else {
//             view = 'Rahul'
//             console.log('Follow ', view)
//             called++
//         }
//     }
// }
// const result = likeTheVideo()
// result()
// result()
// result()

// // Once Polyfill(lodash)
// function once (func, context) {
//     let ran;
//     return function() {
//         if (func) {
//             ran = func.apply(context || this, arguments)
//             func = null
//         }
//         return ran
//     }
// }

// const hello = once(() => {
//     console.log('hello')
// })

// hello()
// hello()
// hello()

// Implement caching/memoization function

// const clumsySquare = (num1, num2) => {
//     for (let i = 1; i <= 10000000; i++) {

//     }
//     return num1 * num2
// }

// function myMemoize(fn, context) {
//     const res = {}
//     return function (...args) {
//         var argsCache = JSON.stringify(args)
//         if (!res[argsCache]) {
//             res[argsCache] = fn.call(context || this, ...args)
//         } 
//             return res[argsCache]
//     }
// }

// const memoized =  myMemoize(clumsySquare)

// console.time('first')
// console.log(memoized(90, 120))
// console.timeEnd('first')

// console.time('second')
// console.log(memoized(90, 120))
// console.timeEnd('second')


// Diff b/w closure and scope

// Closures have local, outer and global scopes, inner function is the closure
// Scope represents what variables you have access to global and local scope.

