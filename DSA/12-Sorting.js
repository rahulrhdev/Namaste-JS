function quickSort(nums) {
    if (nums.length <= 1) return nums
    const pivot = nums[nums.length - 1]
    const left = []
    const right = []
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const result = quickSort([2,4,10,1,3,9,13,11,12])
console.log(result)


function merge(arr1, arr2) {
    let combined = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            combined.push(arr1[i])
            i++
        } else {
            combined.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        combined.push(arr[i])
        i++
    }
    while(j < arr2.length) {
        combined.push(arr2[j])
        j++
    }
    return combined
}

function mergeSort(arr) {
    if (arr.length === 1) return arr
    const midIndex = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, midIndex))
    const right = mergeSort(arr.slice(midIndex))
    return merge(left, right)
}

function bubbleSort(nums) {
    for(let i = nums.length-1; i>=0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j+1]) {
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums
}

const result2 = bubbleSort([2,4,10,1,3,9,13,11,12])
console.log(result2)


function selctionSort(nums) {
    let min
    for(let i = 0; i < nums.length; i++) {
        min = i
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = nums[i]
            nums[i] = nums[min]
            nums[min] = temp
        }
    }
    return nums
}

const result3 = selctionSort([2,4,10,1,3,9,13,11,12])
console.log(result3)

function insertionSort(nums) {
    let temp 
    for (let i = 1; i < nums.length; i++) {
        temp = nums[i]
        for (var j = i - 1; nums[j] > temp && j > -1; j--) {
            nums[j+1] = nums[j]
        }
        nums[j+1] = temp
    }
    return nums
}

const result4 = insertionSort([2,4,10,1,3,9,13,11,12])
console.log(result4)