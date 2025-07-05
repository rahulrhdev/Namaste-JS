// Palindrome for number

function palindromeNum(num) {
    return num = Number(num.toString().split('').reverse().join(''))
}

// alternate
function rawNum(num) {
    let newNum = ''
    for (let i = num.length; i >= 0; i--) {
         newNum.concat(num[i])
    }
    return Number(newNum)
}

const res1 = palindromeNum(1044)
console.log(res1)