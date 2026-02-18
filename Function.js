// function hello() {
//     console.log('Hello')
// }
// hello()
// function hello() {
//     console.log('Helooooooooo')
// }



// hii = () => {
//     console.log('Hii')
// }

// hii()

// const a = 10
// const b = 12

// const add = (a,b) => {
//     c = a + b
//     console.log(c)
// }

// function add(a,b) {
//     c = a - b
//     console.log(c)
// }

// const x = 5
// const y = 6

// add(x,y)


// const arr = ["Apple", "Ball", "Cat", "Dog"]

// arr.forEach((value,index) => {
//     console.log(value, index)
// })


const num1 = parseFloat(prompt('Enter the first value: '))
const num2 = parseFloat(prompt('Enter the second value: '))
const oper = prompt('Enter the Operator like:- +, -, *, / ')

if(oper == '+') {
    add()
} else if(oper == '-') {
    sub()
} else if(oper == '*') {
    mul()
} else if(oper == '/') {
    div()
} else {
    alert('Enter correct operator like :- "+", "-", "*", "/"')
}

function add() {
    console.log(num1 + num2)
}

function sub() {
    console.log(num1 - num2)
}

function mul() {
    console.log(num1 * num2)
}

function div() {
    console.log(num1 / num2)
}