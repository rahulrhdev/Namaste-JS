function createGreeter(greeting) {
    let counter = 0
    return function(name) {
        console.log(`Hi ${name} ${greeting} this greetings has been called ${counter++}`)
    }
}

var casualGreeter = createGreeter('Good Morning!')
var formalGreeter = createGreeter('Good Day!')

casualGreeter('Rahul')
formalGreeter('Riya')

casualGreeter('Karthik')
formalGreeter('Monisha')
formalGreeter('Madhu')
formalGreeter('Hemanth')
casualGreeter('Harsh')

