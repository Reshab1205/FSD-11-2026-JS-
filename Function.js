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

// const num1 = parseFloat(prompt('Enter the first value: '))
// const num2 = parseFloat(prompt('Enter the second value: '))
// const oper = prompt('Enter the Operator like:- +, -, *, / ')

// if(oper == '+') {
//     add()
// } else if(oper == '-') {
//     sub()
// } else if(oper == '*') {
//     mul()
// } else if(oper == '/') {
//     div()
// } else {
//     alert('Enter correct operator like :- "+", "-", "*", "/"')
// }

// function add() {
//     console.log(num1 + num2)
// }

// function sub() {
//     console.log(num1 - num2)
// }

// function mul() {
//     console.log(num1 * num2)
// }

// function div() {
//     console.log(num1 / num2)
// }

// function totalAmt(amt, gst) {
//   const gstAmt = (amt * gst) / 100;
//   const totalAmt = amt + gstAmt;
//   return totalAmt;
// }

// // console.log(totalAmt(100, 18));

// function emiCalculator(p,r,t) {
//     const intAmt = (p * r * t) / 100;
//     const totalAmt = p + intAmt
//     const month = t * 12;
//     const emi = totalAmt / month
//     console.log(emi)
// }

// emiCalculator(1000000, 10, 5)

// const products = [
//   {
//     product_name: "Lays",
//     product_price: 100,
//     product_gst: 12,
//   },
//   {
//     product_name: "Kurkure",
//     product_price: 200,
//     product_gst: 13,
//   },
//   {
//     product_name: "Pasta",
//     product_price: 500,
//     product_gst: 18,
//   },
// ];

// TotalAmount :-

// Array.isArray



// const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// function flatArray(arr) {
//   const res = [];
//   for (i of arr) {
//     if (Array.isArray(i)) {
//       res.push(...flatArray(i));
//     } else {
//       res.push(i);
//     }
//   }
//   return res
// }

// console.log(flatArray(arr));

// [1,2,3,4,5,6,7,8]

// console.time()

// let obj = {
//   name: "Reshab",
//   age: 27,
//   address: {
//     village: "Matiara Tok",
//     po: "Sarai",
//     city: "Vaishali",
//     state: "Bihar",
//   },
//   hobby: "Teaching", // make a function which would fetch all keys( nested obj also) inside the obj
//   skills: {
//     frontend: {
//       skill_1: "HTML",
//       skill_2: "CSS",
//       skill_3: "JS",
//       skill_4: "React",
//       skill_5: "NextJS",
//       component: {
//         project: "EMI calculator",
//         summary: {
//           emi: "Calc EMi",
//           data: {
//             hello: "Hello",
//           },
//         },
//       },
//     },
//     backend: {
//       skill_5: "NodeJs",
//       skill_6: "Express",
//       skill_7: "NestJS",
//       skills: {
//         hello: "Hii"
//       }
//     },
//     db: "MongoDb",
//   },
// };

// console.log(obj[0])
// console.log(obj.hobby)

// function fetchKeys(obj) {
//   for (i in obj) {
//     if (typeof obj[i] == "object"){
//       // console.log(i)
//       fetchKeys(obj[i]);
//     } else {
//       console.log(i)
//     }
//   }
// }

// fetchKeys(obj);

// console.timeEnd()