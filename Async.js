//Synchronous

// function hello() {
//   console.log("Hello");
// }

// function hii() {
//   console.log("Hii");
// }

// function bye() {
//   console.log("BYe");
// }
// hii()
// hello()
// bye()

//Async
// console.log('Hello')
// setTimeout(() => {
//     console.log('Hii')
// })
// Promise.resolve().then(() => console.log('Gaali'))
// console.log('Bye')

//Hello
//Gaali
//Bye
//Hii

// function add(a,b) {
//     const sum = a + b;
//     console.log(sum)
// }

// const a = 5;
// const b= 7;
// setTimeout(function add() {
//     const sum = a + b;
//     console.log(sum)
// }, 3000)
// console.log(add(2,5))

// console.log("Hello");
// setTimeout(() => {
//   console.log("Ist");
//   setTimeout(() => {
//     console.log("2nd");
//     setTimeout(() => {
//       console.log("3rd");
//       setTimeout(() => {
//         console.log("4th");
//       }, 5000);
//     });
//   }, 2000);
// }, 1000);

// console.log("Finish");

// Promise

// async/await

// function hello() {
//   console.log('Hello')
// }
// // setTimeout(() => {
// //   hello()
// // }, 1000)
// let count = 0;
// const x = setInterval(() => {
//   hello();
//   count++;
//   if(count >= 5) {
//     clearInterval(x)
//     console.log('Function ran 5 times')
//   }
// }, 1000)

// const btn = document.querySelector('button')
// btn.addEventListener('click', () => {
//   btn.textContent
// })
// const data = '2+33-4*7/3'
// const inp = data

// const result = eval(inp)
// console.log(result)

// Call apply bind

// const obj = {
//   fname: "Reshab",
//   age: 27,
//   greet: function (city, city1) {
//     console.log("My Name is " + this.fname + " my age is " + this.age + " i am from " + city + city1);
//   },
// };
// const user = { fname: "Ravi", age: 28 };
// const result = obj.greet.bind(user, ["Bhopal"])
// console.log(typeof result)
// result()

// const user1 = { fname: "Baibhav" };
// const users = [
//   { fname: "Ravi", age: 28, city: "Delhi" },
//   { fname: "Baibhav", age: 27, city: "HYD" },
//   { fname: "Avinash", age: 28, city: "BEN" },
// ];

// for(let i of users) {
//   // console.log(i)
//   obj.greet.apply(i, [i.city])
// }
// obj.greet.call(user);

// const app = function () {
//   const data = 'Hello'
//   return data
// }
// console.log(app())
// console.time()
//Order of execution
// function hello() {
//   console.log('Hello')
// }
// setTimeout(() => {
//   console.log('Ist')
// })

// setInterval(() => {
//   hello()
// })
// // console.timeEnd()
// console.log('Hello');
// console.log('Hii');
// Promise.resolve().then(() => console.log('Promise'))



function greet(callback) {
  console.log('Hello')
  callback()
}

function fname() {
  console.log('Reshab')
}

function fname1() {
  console.log('Ravi')
}

greet(fname)
greet(fname1)


const arr = ["Reshab", "Ravi", "Baibhav", "Avinash", "Shubham"];
for(let i of arr) {
  sendSmsService(i, sendDiwaliGreeting)
}

//Sending Msg to Reshab
// Happy New Year Reshab


function sendSmsService(name, callback) {
  console.log(`Sending MSg to ${name}`)
  callback(name)
}

function sendEmailService() {

}

function sendNewYearGreeting(name) {
  console.log(`Happy New Year ${name}`)
}

function sendDiwaliGreeting(name) {
  console.log(`Happy Diwali ${name}`)
}