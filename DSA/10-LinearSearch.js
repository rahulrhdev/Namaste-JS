function linearSearch(nums, target) {
    if (!nums.length || !target) return false
    for (let i = 0; i< nums.length; i++) {
        if (nums[i] === target) return i
    }
}

const result = linearSearch([2,3,1,8,9], 8)
console.log(result)
