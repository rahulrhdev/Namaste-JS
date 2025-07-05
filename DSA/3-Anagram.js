function anagram(s, t) {
    const sort1 = s.split('').sort().join('')
    const sort2 = t.split('').sort().join('')
    return sort1 === sort2
}

const result = anagram('tab', 'batt')
console.log(result)

// diff approach

function anagram1(s, t) {
    if (s.length !== t.length) return false
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] =+ 1
        obj2[t[i]] =+ 1
    }
    for (const char in obj1) {
        if (obj1[char] !== obj2[char]) return false
    }
    return true 
}

const result1 = anagram1('tan', 'natt')
console.log(result1)