// // JS executes sync code first then async code

// console.log('start')

// function impAction(username, cb) {
//   setTimeout(() =>  {
//     cb(`Hello ${username}`)
//   }, 1000) // even its 0 will execute af
// }

// const message = impAction('Rahul', function (message) {
//   console.log(message)
// })
// // console.log(message)
// console.log('stop')

// Promises are used to counter callback hell

// console.log('start')

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true
//     if(result) resolve('Hello there')
//     else reject(new Error('Bye'))
//   }, 2000)
// })

// // console.log(sub);

// sub.then((res) => {
//   console.log(res, 'success')
// })
// .catch((err) => console.error(err))

// console.log('stop')


const morning = (message) => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(message)
 , 1000 })
})}

const afternoon = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(message)
    }, 2000)
  })
}

const night = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message)
    }, 3000)
  })
}

//  promise nesting disadvantage poor readability
// morning('Good Morning').then((res) => {
//   console.log(res)
//   afternoon('Good Afternoon').then((res) => {
//     console.log(res)
//     night('Good Night').then((res) => {
//       console.log(res)
//     })
//   })
// })
// .catch((err) => console.error(err))

// Promise Chainning
// morning('Good Morning').then((res) => {
//   console.log(res)
//   return afternoon('Good Afternoon')
// })
// .then((res) => {
//   console.log(res)
//   return night('Good Night')
// })
// .then((res) => console.log(res))
// .catch((err) => console.error(err))


// Promise combinators

// Promise.all
// Promise.race
// Promise.any
// Promise.allSettled

// Fails if any one promise faile
// Promise.all([
//   morning('Good Morning'),
//   afternoon('Good Afternoon'),
//   night('Good Night')
// ]).then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.error(err)
// })

// Gives the first promise thats settled(could be resolved or rejected).
// Promise.race([
//   morning('Good Morning'),
//   afternoon('Good Afternoon'),
//   night('Good Night')
// ]).then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.error(err)
// })

// // Will return all promises failed and fullfilled ones.
// Promise.allSettled([
//   morning('Good Morning'),
//   afternoon('Good Afternoon'),
//   night('Good Night')
// ]).then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.error(err)
// })

// // Will ignore the rejected promise and gives the fulfilled promise only
// Promise.any([
//   morning('Good Morning'),
//   afternoon('Good Afternoon'),
//   night('Good Night')
// ])
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.error(err)
// })


// async/await

// const result = async() => {
//   try {
//     const message1 = await morning('Good Morning')
//     const message2 = await afternoon('Good Afternoon')
//     const message3 = await night('Good Night')
//     console.log(message1, message2, message3) // wait for 3 seconds
//   } catch (error) {
//     console.error(error) // if any one promise fails it causes error and can be catched in catch block.
//   }
// }

// result()

// Whats the output 

// console.log('start')

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then((res) => {
//   console.log(res)
// })

// console.log('end') 
// start
// 1
// end 
// 2 


// console.log('start')

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then((res) => {
//   console.log(res)
// })

// console.log('end')
// start
// 1
// 3
// end
// 2


// console.log('start')
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   console.log(3)
// })

// promise1.then(res => console.log('Result: ' + res))
// console.log('end')
// start 
// 1
// 3
// end


// console.log('start')
// const fn = () => {
//   new Promise((resolve, reject) => {
//     console.log(1)
//     resolve('success')
//   })
// }
// console.log('middle')
// fn().then(res => console.log(res))
// console.log('end')
// start
// middle
// Promises.js:221 Uncaught TypeError: Cannot read properties of undefined (reading 'then')


// Solve promise recursively

// function promiseRec(args) {
//   if (args.length === 0) return false
//   const currPromise = args.shift()
//   currPromise.then(res => console.log(res))
//   .catch(err => console.error(err))
//   promiseRec(args)
// }


// promiseRec([
//   morning('Good Morning'),
//   afternoon('Good afternoon'),
//   night('Good Night')
// ])

// Promise Polyfill

function PromisePolyfill(executor) {
  // Write here
  this.then = function()
}

const examplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

examplePromise.then((res) => {
  console.log(res)
})
.catch(err => console.error(err))