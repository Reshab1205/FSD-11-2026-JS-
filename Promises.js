//  Promise.reject("Hello")
//  .then((data) => console.log(data))
//  .catch((err) => console.log('err',err))

const result = new Promise((resolve,reject) => {
    let success = true
    if(success) {
        resolve("Successful")
    } else {
        reject("Failed")
    }
});
console.log( typeof result)
.then((data) => console.log(data))
.catch((err) => console.log(err))

// const a = 'Reshab'
// const b = 'Reshab'

// if(a === b) {
//     console.log('TRue')
// } else {
//     console.log('False')
// }


const obj = {
    age:28
}

const obj1 = {
    age:28
}

if(obj == obj1) {
    console.log('TRue')
} else {
    console.log('False')
}

