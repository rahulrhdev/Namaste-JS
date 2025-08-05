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

// Polyfill for filter
Array.prototype.myFilter = function (cb) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        cb(this[i] , i, this) && result.push(this[i])
    }
    return result
}
const newFilter = nums.myFilter((num) => { return num > 2})
console.log(newFilter);

// Polyfill for Reduce
Array.prototype.myReduce = function (cb, initialValue) {
    let acc
    if (initialValue == 0 || initialValue) {
        acc= initialValue
    } else {
        acc = this[0]
    }
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }
    return acc
}
const newReduce = nums.myReduce((acc, curr) => {
    return acc += curr
}, 0)
console.log(newReduce);


// Map vs forEach
const addTwo = nums.map((num) => {
    return num + 2
})
// forEach can modify original array
console.log(addTwo);
const forEachResult = nums.forEach((num, i) => {
    nums[i] = num + 3
})
console.log(nums);


// Questions
// cap the names
let students = [
    {name: 'Rahul', rollNumber: 21, marks: 80},
    {name: 'Riya', rollNumber: 22, marks: 85},
    {name: 'Priya', rollNumber: 23, marks: 75}
]

let names = []

for (const student of students) {
    names.push(student.name.toUpperCase())
}

const capNames = students.map(student => student.name.toUpperCase())
console.log(names);
console.log(capNames);

// return those who have more than 80 marks

const marks80 = students.filter(student => student.marks >= 80)
console.log(marks80);

// return those who have more than 80 and rollNumber > 21

const marksAndRoll = students.filter(student => student.marks >= 80 && student.rollNumber > 21)
console.log(marksAndRoll);


// Sum of all students marks

const sumOfMarks = students.reduce((acc, curr) => {
   return acc + curr.marks
}, 0)
console.log(sumOfMarks);

// return only names more than or equal to 80

const namesMoreThan80 = students.filter((student) => {
    return student.marks >= 80
}).map(student => student.name)

console.log(namesMoreThan80);










