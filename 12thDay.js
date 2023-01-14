//Important Questions for interview
// Q-1 swap two numbers without third variable
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;
console.log(a, b)


// using third variable
// let temp = a;
// a = b;
// b = temp;

// console.log(a, b)


// Q-2 swap two string without using third variable

let x = "Anish";
let y = "Tiwari";

[x, y] = [y, x]
console.log(x, y)


// Q-3 reverse an array without extra array
// let arr = [21, 32, 45, 32, 22]
function reverse(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
        i++;
        j--;
    }
    return arr
}
// console.log(reverse(arr))
console.log(reverse([21, 32, 45, 32, 22]))

// with array
let arr1 = [1, 2, 3, 4, 5]
function withExtra(arr1) {
    let result = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        result.push(arr1[i])
    }
    return result;
}
console.log(withExtra(arr1))

// Q -4 write a js program to cyclically rotate an array
// rotate(arr, 2) = [12, 33, 22, 11, 34] = [34, 11, 12, 33, 22]
// function rotate(arr) {
//     let a = [arr[arr.length - 1]];
//     for (let i = 0; i < arr.length - 1; i++) {
//         a.push(arr[i]);
//     }
//     return a;
// };
// console.log(rotate([12, 33, 22, 11, 34])) // this function will work for 1;




// Q -5  write a program to for given array of repeated elements return the most repeated element from
// the array // highest frequency count in an array
// let numArr = [12, 23, 12, 22, 12, 33, 23, 12, 43, 22, 12, 22, 33]
// function repeat(numArr) {
//     let map = new Map();
//     for (let i = 0; i < numArr.length; i++) {
//         if (map.get(numArr[i]) === undefined) {
//             map.set(numArr[i], 1)
//         } else {
//             map.set(numArr[i], map.get(numArr[i]) + 1)
//         }
//     }
//     // return map
//     let res = []
//     for (let pair of map) {
//         if (pair[1] > 1) {
//             res.push(pair[0])
//         }
//     }
//     return res
// }

// console.log(repeat(numArr))

// let arr = [12, 23, 12, 22, 12, 33, 23, 12, 43, 22, 12, 22, 33]
// function mostFrequent(arr) {
//     var map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         if (map.get(arr[i]) === undefined) {
//             map.set(arr[i], 1)
//         } else {
//             map.set(arr[i], map.get(arr[i]) + 1)
//         }
//     }
//     var max_count = 0, res = -1;
//     map.forEach((value, key) => {
//         if (max_count < value) {
//             res = key;
//             max_count = value;
//         }
//     });
//     return res;
// }
// // console.log(mostFrequent(arr))


// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, -1, -1, 8];
// function freq(arr1) {
//     let maxf = 1;
//     let m = 0;
//     let item;
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = i; j < arr1.length; j++) {
//             if (arr1[i] == arr1[j])
//                 m++;
//             if (maxf < m) {
//                 maxf = m;
//                 item = arr1[i];
//             }
//         }
//         m = 0;
//     }
//     return (`${item} ( ${maxf} times ) `)
// }
// console.log(freq(arr1))



// // by shdab

// // Q -6 find the max sum of an two elements in an array
// function largestTwoNumbers(arr) {
//     let first = -Infinity;
//     let second = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second) {
//             second = arr[i]
//         }
//     }
//     return (first + second)
// }
// // console.log(largestTwoNumbers([2, 3, 4, 2, 2, 11, 334, 44, 22, 666]))


// // reverse an array without using empty array
// function reverseArray(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//         left++;
//         right--;
//     }
//     return arr
// }
// // console.log(reverseArray([24, 23, 122, 12, 2, 1]))

// // return the most frequency element in an array
// function freq(arr) {
//     let map = new Map()
//     let maxFreq = 1;
//     let maxEle = arr[0];
//     if (!arr.length) return null;
//     for (let i = 0; i < arr.length; i++) {
//         if (map.get(arr[i])) {
//             map.set(arr[i], map.get(arr[i]) + 1);
//             if (maxFreq < map.get(arr[i])) {
//                 maxFreq = map.get(arr[i]);
//                 maxEle = arr[i]
//             }
//         } else {
//             map.set(arr[i], 1)
//         }
//     }
//     return (`${maxFreq} ${maxEle}`)
// }
// console.log(freq([1, 1, 1, 2, 2, 2, 3, 4, "a", "b", "a", "a", "a", "a"]))

// // rotate an array by k elements
// function reverseArray1(arr, left, right) {
//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//         left++;
//         right--;
//     }
//     // return arr
// }
// function optimal(arr, k) {
//     reverseArray1(arr, 0, arr.length - 1);
//     reverseArray1(arr, 0, k - 1);
//     reverseArray1(arr, k, arr.length - 1);
//     return arr
// }
// console.log(optimal([2, 3, 4, 2, 2, 11, 334, 44, 22, 666], 5))