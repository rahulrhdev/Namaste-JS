// var first = () => {
//     console.log('hi')
// }
// first
// // console.log(second)
// var second = first()
// // second()

// const fruits = ['apple', 'orange', 'kiwi']
// const sliced = fruits.splice(1)
// console.log(sliced)

// const fruit = 'apple'
// const slice = fruit.slice(1,3)
// console.log(slice)


//  var vs let vs const
// Scope

console.log(a,b,c); // error on B


console.log(a); // undefined
// Due to temporal dead zone
console.log(b); // Reference Error cannot access before initialization
console.log(c); // Reference Error cannot access before initialization


var a = 10
let b = 100
const c = 15
// Variable shadowing
{
    let a = 5
    let b = 16
    // var b = 15 // IIlegal shadowing uncaught syntax error: b has already been declared.
    console.log(a); // 5
    console.log(b); // 16
    
}
console.log(a); // 10
console.log(b); // 100

