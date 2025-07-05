let counter = 0

const getData = () => {
    console.log(`Debounce called ${counter++}`)
}

function debounce(cb, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            cb.call(this, arguments)
        }, delay)
    }
}

const betterFunction = debounce(getData, 1000)


// function throttleFn(cb, delay) {
//     let last = 0
//     return function(...args) {
//         let now = Date.now()
//         if (now - last < delay) return
//         return cb()
//     }
// }

function throttled(cb, delay) {
    let last  = 0
    return function() {
        let now = Date.now()
        if (now - last < delay) return
        last = now
        return cb.call()
    }
}


window.addEventListener('resize', throttled(getData, 1000))