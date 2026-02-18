// console.log('Hello World')
// console.log(10+10)
// console.log(10 - 10)
// console.log(10 / 0)
// console.log(10 * 10)
// console.log(10 + '10')
// console.log(10 * '10')

// var a = 5;
// var a = 10;

// console.log(a)

// let b= 10;
// let b = 8;
// console.log(b)

// const c = 10;
// // const c =12;
// console.log(c)

// const a = 10.87
// const b = 'Reshab'
// const d = "KUmar"
// const f = `Sah`
// const c = true
// const y = '10'

// let x;
// const y = NaN
// const d = undefined
// const x = Number('Reshab')
// console.log(typeof(d))

// const x = 10

// const arr = [1,2,3,4,5, "Reshab"]
// console.log(arr)

// const x = 9
// const y = '0'
// const add = y + x;
// console.log(add)

// const d = 20 % 3
// console.log(d)

// function something() {
//     const hii = false
// }

//     const data = '10'
//     const data1 = 10

// if(data === data1) {
//     console.log('Hello')
// } else {
//     console.log('Bye')
// }

// const data = prompt('Enter the value: ')
// console.log(data)
// 1) Wap to find ODD or even
// 2) Wap to specify the grades of students
// // O+ --> 90 to 100
// A+ --> 85 to 90
// A --> 80 to 85
// B+ --> 75 to 80
// B ---> 70 to 75
// C+ --> 65 to 70
// C --> 60 to 65
// D+ --> 55 to 60
// D --> 50 to 55
// E --> less than 50

// less than 0 or greater than 100  --> Enter correct Value

// let data = 42

// if( data % 2 == 0) {
//     console.log('Even Number')
// } else {
//     console.log('ODD Number')
// }

// let marks = prompt('Enter Marks: ');

// if(marks <= 100 && marks >= 90) {
//     console.log("O+")
// } else if(marks <= 90 && marks >= 85) {
//     console.log("A+")
// } else if(marks <= 85 && marks >= 80) {
//     console.log("A")
// } else if(marks <= 80 && marks >= 75) {
//     console.log("B+")
// } else if(marks <= 75 && marks >= 70) {
//     console.log("B")
// } else if(marks <= 70 && marks >= 65) {
//     console.log("C+")
// } else if(marks <= 65 && marks >= 60) {
//     console.log("C")
// } else if(marks <= 60 && marks >= 55) {
//     console.log("D+")
// } else if(marks <= 55 && marks >= 50) {
//     console.log("D")
// } else if( marks < 50 && marks >= 0){
//     console.log("Fail")
// } else {
//     console.log('Enter Correct Value')
// }

// const b = ["Reshab", "Kumar"]
// const c = [true, false]

// const mix = ["Reshab", 27, true, null, undefined]
// console.log(mix.length)

// for(let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// console.log(b)

// for(i = a.length - 1; i >= 0; i++) {
//     console.log(a[i])
// }

// for(i of a) {
//     console.log(i)
// }

// console.log('-------------------')

// for( i in a) {
//     console.log(i)
// }

// const a = [1, 2, 3, 4, 5];

// a.forEach((a) => {
//   console.log(a);
// });


// let student = { name: "Alex", age: 20, grade: "A" };

// for( i in student) {
//     console.log(i)
// }

// const x = 5
// x = 10
// console.log(x)
// const arr = ["Reshab", "Kumar", 27, true]
// const obj = {fname: "Reshab", lname: "Kumar", age:27, isActive:true}

// function inside Object 

// // obj = [12,3,4,5]
// obj = {fname: "Kumar", lname: "Reshab", age:27, isActive:false}
// // obj.age = 28
// // obj.hello = "Hii"
// console.log(obj)


// for(i in arr) {
//     console.log(i)
// }
// for(i in obj) {
//     console.log(i)
// }


// const x = 'Reshab'
// const y = 'Kumar'


// const c = `Hii I am ${x} ${y}`

// console.log(typeof(c))

// const x = 10
// const y = 12
// function add() {
//     const c = x + y
//     return c
// }

// console.log(add())


// const obj = {
//     fname: "Reshab", 
//     lname: "Kumar", 
//     age:27, 
//     isActive:true,
//     hii:function sayhii() {
//         console.log('Hii')
//     },
//     hello: function sayHello() {
//         console.log(`Hii, How are you ${this.fname}`)
//     }
    
// }

// const x = 10
// const y = '10'

// if(x === y) {
//     console.log('Equal')
// } else {
//     console.log('NE')
// }
// sayHello()
// console.log(obj.fname)
// obj.hello

// for(i in obj) {
//     if(typeof(obj[i]) !== 'function' || typeof(obj[i]) !==  'boolean') {
//         console.log(i)
//     }
// }


// new Object

// const fullName = "Reshab", "Kumar"

// const arr = ["John", "Doe", 50, "New York"]

// const x = 27
// const data = `My age is ${x}`
// console.log(data)

const obj = {
    fname: "John",
    lname: "Doe",
    age: 50,
    city: "New York",
    isActive:true,
    hello: function fullName() {
            c = `${this.fname} ${this.lname}`
            return c
        },
    address:{
        address_line_1:"Coding Thinker, Kasturba Nagar",
        address_line_1:"Chetak Bridge",
        city:"Bhopal",
        state:"MP",
        pincode:462023
    },
    arr:[1,2,3,4,5],
    data:[1,2,3,4,5]
}

// for(i in obj) {
//     if(!Array.isArray(obj[i])){
//         console.log(i)
//     }
// }

// function hello() {

// }

// function hello() {

// }
// var hii = () => {
//     //
//     return true
// }

// var hii = false
//hoisting




// const arr = [1,2,3,4,5,6]

// arr[0]

// for(i in arr) {
//     console.log(arr[i])
// }



// == , ===


// // Object.seal(obj)
// Object.freeze(obj)
// obj.city = "Washington"
// console.log(obj)

// const data1 = Object.keys(obj)
// const data2 = Object.values(obj)


// const data = Object.entries(obj)
// console.log(data)


// for(let i in obj) {
//     if(typeof(obj[i]) !== 'function' && typeof(obj[i]) !== 'boolean') { 
//         console.log(i)
//     }  
// }


// console.log(obj.hello())

// const obj1 = new Object({
//     fname: "John",
//     lname: "Doe",
//     age: 50,
//     city: "New York"
// })

// console.log(obj1)










