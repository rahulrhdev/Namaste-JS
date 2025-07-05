// // console.log('Start')

// // setTimeout(function () {
// //     console.log('Timer')
// // }, 5000)

// // console.log('End')

// // const arr = [1,2,3,4,5]

// // function double(num) {
// //     return num * 2
// // }
// // const mapResult = arr.map(double)
// // console.log(mapResult)

// // const arr = [1,2,3,4,5]

// // const filterResult = arr.filter(num =>  num % 2 === 0)
// // console.log(filterResult)

// // const reduceResult = arr.reduce((acc, curr) => {
// //     acc += curr
// //     return acc
// // },0)
// // console.log(reduceResult)

// // find max

// // const output = arr.reduce((max, curr) => {
// //     if (curr > max) {
// //         max = curr
// //     }
// //     return max
// // }, 0)

// // console.log(output)

// // const users = [
// //     {name: 'Rahul', age: 25},
// //     {name: 'Riya', age: 23},
// //     {name: 'Deepika', age: 27},
// //     {name: 'Niharika', age: 25 },
// //     {name: 'Akshay', age: 25}
// // ]

// // const output = users.reduce((acc, curr) => {
// //     if(acc[curr.age]) {
// //         acc[curr.age] = ++acc[curr.age]
// //     } else {
// //         acc[curr.age] = 1
// //     }
// //     return acc
// // }, {})

// // const output = users.reduce((acc, curr) => {
// //     if (curr.age <= 25) {
// //         const obj = {}
// //         obj.name = curr.name
// //         obj.age = curr.age
// //         acc.push(obj)
// //     }
// //     return acc
// // }, []).reduce((acc, curr) => {
// //     if (curr.name === 'Rahul' || curr.name === 'Riya') {
// //         acc.push(curr.name)
// //     }
// //     return acc
// // }, [])

// // console.log(output)

// // const api = 'https://api.github.com/users/rahulrhdev'

// // const user = fetch(api)
// // // console.log(user)
// // let data = user.then((response) => {
// //     return response.json()
// // })

// // console.log(data)

// // const cart = ['shoes', 'pants', 'kurta']
// // // const cart = []

// // const promise = createOrder(cart)

// // promise.then((orderId) => {
// //     console.log('createOrder success', orderId)
// //     return orderId
// // })
// // .then((orderId) => {
// //     const transactionId = proceedToPayment(orderId)
// //     console.log(transactionId)
// //     return transactionId
// // })
// // .then((transactionId) => {
// //     console.log(transactionId, 'Paymentid')
// //     paymentDisplay(transactionId)
// //     return transactionId
// // })
// // .catch((err) => {
// //     console.error(err.message, 'failed')
// // })
// // .finally(() => {
// //     console.log(`Process completed`)
// // })


// // function createOrder(cart) {
// //     const pr = new Promise((res, rej) => {
// //         // createOrder
// //         // validateOrder
// //         // orderId
// //         if (cart.length === 0) {
// //             const err = new Error('Invalid cart')
// //             rej(err)
// //         }
// //         const orderId = new Date().getTime()
// //         if (orderId) {
// //             setTimeout(() => {
// //                 res(orderId)
// //             }, 1000)
// //         }
// //     })
// //     return pr
// // }

// // function proceedToPayment(orderId) {
// //     const pr = new Promise((res, rej) => {
// //         res(new Date().getTime())
// //         // return new Date().getTime()
// //     })
// //     return pr
// // }

// // function paymentDisplay(transactionId) {
// //     return new Promise((res, rej) => {
// //         const err = new Error(`Payment failed with id ${transactionId}`)
// //         rej(err)
// //     })
// // }


// // const p1 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         reject('P1 success')
// //     }, 1000)
// // })

// // const p2 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         reject('P2 sucess')
// //     }, 2000)
// // })

// // const p3 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve('P3 success')
// //     }, 500)
// // })

 
// // Promise.allSettled([p1, p2, p3])
// // .then((result) => {
// //     console.log(result)
// // })
// // .catch((err) => {
// //     console.error(err)
// //     console.log(err.errors)
// // })


const API_URL = 'https://api.github.com/users/rahulrhdev'

async function handlePromise() {
    try {
        const data =  await fetch(API_URL)
        console.log(data, 'data')
        const jsonValue = await data.json()
        console.log(jsonValue, 'json')
    } catch (error) {
        console.error(error)
    }
}

handlePromise()

async function getData() {
    try {
         const response = await fetch('https://api.github.com/users/rahulrhdev')
        //  console.log(response.json())
        const result = await response.json()
        // console.log(result)
        return Promise.resolve(result)
    } catch(error) {
        console.error(error)
    }
}

const result = getData()
result.then((data) => {
    console.log(data)
})