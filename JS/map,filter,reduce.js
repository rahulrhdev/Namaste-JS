// map, filter and reduce

// Map
const nums = [1,2,3,4]
const multiplyByTwo = nums.map((num, i, arr) => {
    return num * 2
})
console.log(multiplyByTwo);

// Filter
const moreThanTwo = nums.filter(num => num > 2)
console.log(moreThanTwo);

// reduce
const sum = nums.reduce((acc, curr) => {
    return acc += curr
}, 0)
console.log(sum);

// PolyFill for Map

Array.prototype.myMap = function(cb) {
    const result = []
    for (let index = 0; index < this.length; index++) {
        result.push(cb(this[index], index, this))
    }
    return result
}

const newMap = nums.myMap((num, i, arr) => {
    return num * 2
})

console.log(newMap);





