function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]
        console.log(complement, 'cmp')
        if (arr.includes(complement)) {
            return [i, arr.indexOf(complement)]
        }
    }
    return false
}

const result = twoSum([1,5,3,2,8,11], 9)
console.log(result)