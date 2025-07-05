function secondLargest(nums) {
    let large = 0
    let secondLargest = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > large) {
            secondLargest = large
            large = nums[i] 
        } else if (nums[i] !== large && secondLargest < nums[i]) secondLargest = nums[i]
    }
    return secondLargest
}

const result = secondLargest([5,11,4,8,18,26,10,16])
console.log(result)