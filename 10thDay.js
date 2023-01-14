// flatten the array

function flatArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatArray(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

console.log(flatArray([1, 2, [3, [4, [5, 6,]]], 7, [8, 9, 10], [11, [12, 13, 14]]]))


// capitalize the array

function capitalise(arr, index) {
    if (index < arr.length) {
        arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1)
        capitalise(arr, index + 1)
    }
}
let arr = ["cat", "dog", "rat"]
capitalise(arr, 0)
// console.log(capitalise(["cat", "dog", "rat"], 0))
console.log(arr)



//return the sum in the given obj
// let obj = {
//     outer: 2,
//     obj: {
//         inner: 2,
//         otherObj: {
//             superNumber: 2,
//             notNumber: true,
//             notEven: 7
//         }
//     }
// }

function evenSum(obj) {
    let sum = 0;
    for (let key in obj) {
        if (obj[key] !== null && typeof (obj[key]) === "object") {
            sum += evenSum(obj[key])
        }
        else if (typeof (obj[key]) === "number") {
            if (obj[key] % 2 === 0) {
                sum += obj[key]
            }
        }
    }
    return sum;
}
let obj = {
    outer: 2,
    obj: {
        inner: 6,
        inner2: 6,
        otherObj: {
            superNumber: 2,
            notNumber: true,
            notEven: 7
        }
    }
}
console.log(evenSum(obj))