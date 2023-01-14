// frequency count
// let a = [2, 3, 4, 5, 4, 3]
// let b = [4, 9, 16, 25, 16, 9]
// function fc(a, b) {
//   let obj = {}
//   for (i in a) {
//     obj[a[i]] += 1
//     for (i in b) {
//       obj[b[i]] += 1
//     }
//     for (key in obj) {
//       obj[key * key] != obj[key]
//       return false
//     }
//   }
//   return true
// }
// console.log(fc(a, b))

// let objA = {}
// let objB = {}
// for (let i = 0; i < a.length; i++) {
//     objA[a[i]] += 1;
//     for (let j = 0; j < b.length; j++) {
//         objB[b[i]] += 1;
//     }
//     for (key in objA) {
//         objB[key * key] != objA[key]
//         return false
//     }
//     return true
// }
// console.log(objA, objB)

//[=============================================================]

// by shadab

// const arr = ["8", "9", "9", "9", "1", '1', "2", "3", "4", "1", "3", "54", "8", "9", "9", "8", "1", "1", "1", "5"]
// let max = 0; let maxChar = null;
// for (let i = 0; i < arr.length; i++) {
//     let curr = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             curr += 1;
//         }
//     } if (curr > max) {
//         max = curr;
//         max = arr[i];
//     }
// }
// console.log(max, "------", maxChar)


//.=========================================================
const arr = ["8", "9", "9", "9", "1", '1', "2", "3", "4", "1", "3", "54", "8", "9", "9", "8", "1", "1", "1", "5"]
let freq = {}; let max = 0; let maxChar = 0;
for (let i = 0; i < arr.length; i++) {
  if (freq.hasOwnProperty(arr[i])) {
    freq[arr[i]] += 1;
  } else {
    freq[arr[i]] = 1;
  }
  if (max < freq[arr[i]]) {
    max = freq[arr[i]];
    maxChar = arr[i];
  }
}

console.log(max, "------", maxChar)


// =======================================================

// let str = "Anish Anish Anish Anish Anish Anish Anish Anish"
// str = str.split(" ")
// console.log(str);
// let freq = {}; let max = 0; let maxChar = 0;
// for (let i = 0; i < str.length; i++) {
//     if (freq.hasOwnProperty(str[i])) {
//         freq[str[i]] += 1;
//     } else {
//         freq[str[i]] = 1;
//     }
//     if (max < freq[str[i]]) {
//         max = freq[str[i]];
//         maxChar = str[i];
//     }
// }

// console.log(max, "------", maxChar)

//============================================
// const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

// const count = {};

// for (const element of arr) {
//   if (count[element]) {
//     count[element] += 1;
//   } else {
//     count[element] = 1;
//   }
// }

// console.log(count);

// const arr = [1, 1, 1, 2, 3, 3];
// const count = {};

// for (const element of arr) {
//   if (count[element]) {
//     count[element] += 1;
//   } else {
//     count[element] = 1;
//   }
// }

// console.log(count);


let str = "Anish Anish Anish Anish Anish Anish Anish Anish Kumar Kumar Kumar Kumar Kumar"
str = str.split(" ")
const count = {};

for (let i = 0; i < str.length; i++) {
  if (count[str[i]]) {
    count[str[i]] += 1;
  } else {
    count[str[i]] = 1;
  }
}

console.log(count);