function binarySearch(nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (nums[middle] === target) return middle
        else if (target > nums[middle]) start = middle++
        else end = middle--
    }
    return -1
}

const result = binarySearch([1,3,4,5,6], 5)
console.log(result)