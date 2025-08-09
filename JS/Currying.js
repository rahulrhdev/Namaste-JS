// // Currying

// // f(a,b) into f(a)(b)

// function f (a) {
//     return function (b) {
//         console.log(a, b)
//     }
// }

// f(5)(6)

// function sum (a) {
//     return function (b) {
//         return function(c) {
//              console.log(a + b + c)
//         }
//     }
// }
// sum(5)(4)(1)

// function evaluate (operation) {
//     return function (a) {
//         return function(b) {
//             switch (operation) {
//                 case 'sum':
//                     console.log(a + b)
//                     break
//                 case 'multiply':
//                     console.log(a * b)
//                     break
//                 case 'divide':
//                     console.log(a / b)
//                     break
//                 case 'subtract':
//                     console.log(a - b)  
//                     break  
//             }
//         }
//     }
// }

// evaluate('sum')(2)(2)
// evaluate('multiply')(2)(2)
// evaluate('subtract')(2)(2)
// evaluate('divide')(2)(2)


// // Infinite currying

// // sum(1)(2)(3)....(n)


// function sum (a) {
//     return function (b) {
//         if (b) {
//             return sum(a + b)
//         }
//         console.log(a)
//     }
// }

// sum(1)(2)(3)(8)()

// Currying vs Partial Applications

// Partial

// function sum(a) {
//     return function (b, c) {
//         console.log(a + b + c)
//     }
// }
// sum(10)(5,5)


// Manipulating DOM

// function updateElementText (id) {
//     return function (content) {
//         document.querySelector('#'+ id).textContent = content
//     }
// }

// const updateHeader = updateElementText('heading')
// updateHeader('Hello Rahul')


// curry() implementation
// converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        console.log(args.length, func.length);
        if (args.length >= func.length) {
            return func(...args)
        } else {
            return function(...next) {
                return curriedFunc(...args, ...next)
            }
        }
    }
}

const sum = (a,b,c, d) => a + b + c + d
const totalSum = curry(sum)

console.log(totalSum(1)(2)(3))