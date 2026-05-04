// const arr = [1,2,3,4]
// const arr1 = [5,6,7,8]

// const ar = [...arr, ...arr1]
// console.log(ar)

// const {...x} = [2,1,3,4,5,6,7,8,9]
// // console.log(a,b,c)
// console.log(x)

//[1,2,3,4,5,6,7,8]

// const obj = {
//     z:"f",
//     fname: "reshab",
//     lname: "kumar",
//     age:28
// }

// const {lname, fname, age,x} = obj
// console.log(x)


// const arr = [1,2,3,4,5]

// const data = arr.filter((x)=> x % 2 == 0)
// console.log(data)


// const users = [
//     {name: "Reshab", age:28},
//     {name: "Baibhav", age:25},
//     {name: "Avinash", age:18},
//     {name: "Shubham", age:29},
//     {name: "Ravi", age:12},
//     {name: "Kousik", age:17}

// ]

// const res = users.filter((data) => (data.age >= 18))
// res.map((data) => console.log(data.name) )

// console.log(res)

// const arr = [1,2,3,4,5]

// const data = arr.reduce((x,y) => {
//     return x + y
// },0)
// console.log(data)

const users = [
    {id:1, name:'A'},
    {id:2, name:'B'},
    {id:3, name:'C'},
]


// {'1': 'A', 2:'B', '3': 'C'}

// const obj = users.reduce((acc,curr) => {
//     acc[curr.id] = curr.name
//     return acc

// }, {})
// console.log(obj)

// const arr = [[1,2], [3,4],[5,6]]

// const flat = arr.reduce((a,b) => {
//     a = a.concat(b)
//     return a
// }, [])
// console.log(flat)


//[1,2,3,4,5,6]