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

let data = 42

if( data % 2 == 0) {
    console.log('Even Number')
} else {
    console.log('ODD Number')
}

let marks = prompt('Enter Marks: ');

if(marks <= 100 && marks >= 90) {
    console.log("O+")
} else if(marks <= 90 && marks >= 85) {
    console.log("A+")
} else if(marks <= 85 && marks >= 80) {
    console.log("A")
} else if(marks <= 80 && marks >= 75) {
    console.log("B+")
} else if(marks <= 75 && marks >= 70) {
    console.log("B")
} else if(marks <= 70 && marks >= 65) {
    console.log("C+")
} else if(marks <= 65 && marks >= 60) {
    console.log("C")
} else if(marks <= 60 && marks >= 55) {
    console.log("D+")
} else if(marks <= 55 && marks >= 50) {
    console.log("D")
} else if( marks < 50 && marks >= 0){
    console.log("Fail")
} else {
    console.log('Enter Correct Value')
}
