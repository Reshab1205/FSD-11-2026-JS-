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

// const result = fetch('https://jsonplaceholder.typicode.com/posts');

// // console.log('Ist',result)

// result
// .then((res) => {
//     // console.log(res.body)
//     if(!res.ok) {
//         console.log('Error')
//         return
//     }
//      return res.json()
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// console.log('2nd',result)

// let str = 'reshab'

// str = Number(str)
// console.log(str)



// new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('Hello')}, 500)
//     setTimeout(() => {reject('Failed')})
// }).then((data) => console.log(data))
// .catch((err) => console.log(err))
// const lat = 23;
// const lng = 76;
// const apiKey = '23a13401e6964d149835d8022a7fa787'
// const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
// fetch(url)
// .then((res) => res.json())
// .then((result) => console.log(result.results[0].formatted))
// .catch((err) =>console.log(err) )


// const arr = [1,2,3,4,5]
// const arr1 = [6,7,8,9,10]
// const arr2 = [11,12,13,14,15]

// for(let i in arr) {
//     console.log(i)
//     console.log(arr[i])
// }

// for(let i in arr1) {
//     console.log(i)
//     console.log(arr1[i])
// }

// for(let i in arr2) {
//     console.log(i)
//     console.log(arr2[i])
// }

// console.log('a')
// console.log('b')
// console.log('c')
// console.log('d')
// console.log('e')
// Promise.resolve('Hello').then((data) => {console.log(data)})
// setTimeout(() => {
//     console.log('f')
// }, 10000)
// console.log('g')
// console.log('h')
// console.log('i')
// setTimeout(() => {
//     console.log('j')
// },2000)


const lat = 23;
const lng = 76;
const apiKey = '23a13401e6964d149835d8022a7fa787'
const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`

async function fetchLocation() {
    try {
        const data =  await fetch(url)
        const result = await data.json()
        console.log(result.results[0].formatted)
        
    } catch(err) {
        console.log(err)
    }
    // .then((res) => res.json())
    // .then((result) => console.log(result.results[0].formatted))
    // .catch((err) =>console.log(err) )
}

fetchLocation()
