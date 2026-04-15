//  Promise.reject("Hello")
//  .then((data) => console.log(data))
//  .catch((err) => console.log('err',err))



// const result = new Promise((resolve,reject) => {
//     let success = true
//     if(success) {
//         resolve("Successful")
//     } else {
//         reject("Failed")
//     }
// });
// console.log( typeof result)
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// const a = 'Reshab'
// const b = 'Reshab'

// if(a === b) {
//     console.log('TRue')
// } else {
//     console.log('False')
// }

// fetch()


// const obj = {
//     age:28,
//     greet: function() {
//         console.log('Hello')
//     }
// }

// console.log(obj.greet())

// const obj1 = {
//     age:28
// }

// if(obj == obj1) {
//     console.log('TRue')
// } else {
//     console.log('False')
// }


// const x = new Promise((resolve, reject) => {
//     let success = true
//     if(success) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })
// console.log('Ist',x)
// x
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
// XMl 

const result = fetch('https://jsonplaceholder.typicode.com/posts');

// console.log('Ist',result)

result
.then((res) => {
    // console.log(res.body)
    if(!res.ok) {
        console.log('Error')
        return
    }
     return res.json()
})
.then((data) => console.log(data))
.catch((err) => console.log(err))

// console.log('2nd',result)


