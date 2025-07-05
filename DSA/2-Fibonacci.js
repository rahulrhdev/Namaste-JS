function fibonacci(num) {
    const res = [0,1]
    for (let i = 2; i <= num; i++) {
        const newElement = res[i-1] + res[i-2]
        res.push(newElement)
    }
    return res
}


const result1 = fibonacci(7)
console.log(result1)

// recursion

function fibonacciRec(num) {
    if (num <= 1) return num
    return fibonacciRec(num-1) + fibonacciRec(num-2)
}

const result2 = fibonacciRec(7)
console.log(result2, 'res2')