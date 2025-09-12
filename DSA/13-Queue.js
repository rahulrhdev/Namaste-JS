// // Queues in javascript
// // Follows FIFO
// // Methods enpqueue(elem) , dequeue, peek, isEmpty, size


// class Queue {
//     constructor() {
//         this.items = []
//     }
//     enqueue(element) {
//         this.items.push(element)
//     }
//     dequeue() {
//         if (this.isEmpty) return 'Underflow, cannot perform dequeue'
//         return this.items.shift()
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     peek() {
//         if (this.isEmpty) return 'Underflow'
//         return this.items[0]
//     }
//     size() {
//         return this.items.length
//     }
//     printQueue() {
//         let queueString = ''
//         for (const str of this.items) {
//             queueString += str + ', '
//         }
//         console.log('Queue :',queueString)
//     }
// }

// const myQueue = new Queue()
// // myQueue.enqueue(5)
// // myQueue.enqueue(7)
// // myQueue.enqueue(8)
// // myQueue.enqueue(9)
// // myQueue.enqueue(0)
// // console.log(myQueue.peek())
// // console.log(myQueue.isEmpty())
// // console.log(myQueue.size())
// // myQueue.dequeue()
// // myQueue.printQueue()

// // Circular Queue Implementation ** last position is connected to first to complete the circle.
// // Initially first and rear is at the same place
// // Has a fixed size.
// var MyCircularQueue = function (k) {
//     this.queue = []
//     this.size = k
// }

// MyCircularQueue.prototype.enqueue = function(value) {
//     if (this.size === this.queue.length) return false
//     this.queue.push(value)
//     return true
// }

// MyCircularQueue.prototype.deQueue = function() {
//     if (!this.queue.length) return false
//     this.queue.shift()
//     return true
// }

// MyCircularQueue.prototype.front = function() {
//     if (!this.queue.length) return -1
//     return this.queue[0] 
// }

// MyCircularQueue.prototype.rear = function() {
//     if (!this.queue.length) return -1
//     return this.queue[this.queue.length - 1] 
// }

// MyCircularQueue.prototype.isEmpty = function() {
//     if (!this.queue.length) return true
// }

// MyCircularQueue.prototype.isFull = function() {
//     if (this.size === this.queue.length) return true
//     return false
// }

// const myRoundQueue = new MyCircularQueue(3)
// myRoundQueue.enqueue(1)
// myRoundQueue.enqueue(2)
// myRoundQueue.enqueue(3)
// // console.log(myRoundQueue.enqueue(4))
// myRoundQueue.deQueue()
// myRoundQueue.enqueue(4)

// console.log(myRoundQueue.front(), myRoundQueue.rear())

// Implement Stack using Queues

var MyStack = function() {
    this.q1 = []
    this.q2 = []
}

MyStack.prototype.push = function (x) {
    while(this.q1.length !== 0) {
        this.q1.push(this.q1.shift())
    }
}
