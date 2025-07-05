function removeDups(nums) {
    // console.log(Array.from(new Set(nums)).sort())
    let i = 0
    for (let j = 1; i < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    return nums
}

const result = removeDups([1,1,2,3,4])
console.log(result)