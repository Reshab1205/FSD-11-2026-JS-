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

console.log("Hello");
setTimeout(() => {
  console.log("Ist");
  setTimeout(() => {
    console.log("2nd");
    setTimeout(() => {
      console.log("3rd");
      setTimeout(() => {
        console.log("4th");
      }, 5000);
    });
  }, 2000);
}, 1000);

console.log("Finish");

Promise

async/await
