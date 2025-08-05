// Functions in JS
// What is function declaration?
function square(num) {
    return num * num
}

// What is function expression?
const square2 = function (num) { // Anonymous function
    return num * num
}

// What are the first class functions
// Function can be passed to other functions can be used manipulated and return from other functions basically anything a variable could do
function displaySquare(fn) {    
    console.log('Square is ' + fn);
}
// displaySquare(square(5))

// What is IIFE?
// (function (num) {
//     console.log(num* num);
// })(5)
// (function square3(num) {
//     console.log(num* num);
// })(6)

// O/P based question IIFE
(function (x) {
    return (function (y) {
        console.log(x);
    })(2)
})(1)
// answer is 1 due to closures

// for(let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000)
// }

// function functionName() {
//     console.log(this.x)
//     var x = 6
//     console.log(x)
// }

// functionName()


// var x = 21

// var func = function() {
//     // var x = 3
//     console.log(x);
//     // var x = 3
// }

// func()


// Params vs Arguments


function square(num) {  // params
    console.log(num * num);
}

square(5) // args

function multiply(...args) { // rest
    const [num1, num2] = args
    console.log(num1 * num2);
}

const nums = [2,3]
multiply(...nums)

// Tricky spread vs rest

const fn = (a, x, y, ...numbers) => {
    console.log(numbers);
}

fn(1,2,3,4,5,6)


// What is callback fn
document.addEventListener('click', function() {
    console.log('click');
})


// Arrow functions
// Differences to normal functions
// 1. Syntax
const add = (firstNum, secondNum) => {
    return firstNum + secondNum
}
const addResult = add(2,3)
console.log(addResult);

// Implicit return keyword
const subtract = (num1, num2) => num2 - num1
const subtractResult = subtract(2,4)
console.log(subtractResult);

// Arguments
function fn3() {
    console.log(arguments);
}
const fn2 = () => {
    console.log(arguments);
}
fn3(1,3,3)
fn2()

// this keyword
 
let user = {
    username: 'Rahul',
    rc1: () => {
        console.log(this.username);
    },
    rc2 () {
        console.log(this.username);
    }
}

console.log();
