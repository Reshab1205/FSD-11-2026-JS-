// const arr = [10000,20000,30000,40000,50000]
// // console.log(arr[5])

// for(let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     console.log(addBonus(arr[i], 20))
// }
// function addBonus(salary, bonus) {
//     const bonusAmt = (salary * bonus) / 100;
//     return salary + bonusAmt
// }

// for(let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
// }

const arr = [1, 2, 3, 1, 2, 5, 7, 8, 3, 9, 5, 1, 2, 9];
const data = [];
for (let i = 0; i < arr.length; i++) {
  let check = true;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      check = false;
    }
  }
  if (check == true) {
    data.push(arr[i]);
  }
}
console.log(data);
// for(i in arr) {
//     const d = arr[i] * arr[i]
//     arr1.push(d)
// }

// console.log(arr1)

// [1,2,3,5,7,8,9]
