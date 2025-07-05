function buySell(nums) {
    let maxProfit = nums[0]
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let profit = nums[j] - nums[i]
            if (maxProfit < profit) maxProfit = profit
        }
    }
    return maxProfit
}

const result = buySell([2,0,9,1,3,8,10,13,1,9])
console.log(result)