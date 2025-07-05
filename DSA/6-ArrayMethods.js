// My Map

Array.prototype.myMap = function(cb) {
    const result = []
    for (let i = 0; i < this.length; i++){
        result.push(cb(this[i], i, this))
    }
    return result
}

const arr = [1,2,3,4]
const multiplyByTwo = arr.myMap(num => num * 2)
console.log(multiplyByTwo)

Array.prototype.myFilter = function(cb) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(cb(this[i], i, this))
        }
    }
    return result
}

const arr2 = [2,4,6,7,8,4,9,10,2]
const divisibleByTwo = arr2.myFilter((num) => {
    if (num % 2 != 0) {
        return num
    }
})
console.log(divisibleByTwo)

Array.prototype.myReduce = function (cb, initialValue) {
    var acc = initialValue ? initialValue : this[0]
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[0]
}
return acc
}

const reducer = arr2.myReduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
}, {})

console.log(reducer)

let car1 = {
    color: 'grey',
    car: 'Hyundai i20'
}

function purchaseCar (currency, price) {
    console.log(`${this.car} of ${this.color} color costed me of ${currency} ${price}.`)
}

Function.prototype.myCall = function(context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('This is not a function')
    }
    context.fn = this
    context.fn(...args)
}

purchaseCar.myCall(car1, 'Rs', '9lakhs')

Function.prototype.myApply = function(context = {}, args=[]) {
    if (typeof this !== 'function') {
        throw new Error('This is not a function')
    }
    // if (Array.isArray(args)) {
    //     throw new Error('Arguments is not a array')
    // }
    context.fn = this
    context.fn(...args)
}

purchaseCar.myCall(car1, 'Rs', '9lakhs')

purchaseCar.myApply(car1, ['Rs', '10lakhs'])

Function.prototype.myBind = function(context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('This is not a function')
    }
    context.fn = this
    return function(...newargs) {
        return context.fn(...args, ...newargs)
    }
}

const example = purchaseCar.myBind(car1, 'Rs', '7Lakhs')

example()