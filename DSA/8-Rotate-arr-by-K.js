function rotateByK(nums, k) {
    const size = nums.length
    if (!size) return false
    if (k > nums.length) k = k % nums.length
    const rotated = nums.splice(size - k, size)
    nums.unshift(...rotated)
    return nums
}

const result = rotateByK([1,2,3,4,5], 7)
console.log(result)