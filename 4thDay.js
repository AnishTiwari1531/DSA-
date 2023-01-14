// Multiple Pointers
// find pair which comes 0 after adding

// let arr = [-5, -3, -2, 1, 5, 7]
// function twoPair(arr){
//     for(let i in arr){
//         for(let j in arr){
//             if(arr[i] + arr[j] == 0){
//                 return ([arr[i], arr[j]])
//             }
//         }
//     }
//     return false
// }
// console.log(twoPair(arr))

//===========================================================

// find the first pair 
// let arr = [-5, -3, -2, 1, 2, 4]
// function pair(arr) {
//     let j = arr.length - 1;
//     let i = 0
//     while (i < j) {
//         if (arr[i] + arr[j] == 0) {
//             return ([arr[i], arr[j]])
//         }
//         else if (arr[i] + arr[j] > 0) {
//             j = j - 1
//         }
//         else (arr[i] + arr[j] < 0)
//             i = i + 1
//     }
//     return false
// }
// console.log(pair(arr))

//==================================================

// find pair which is equal to 6 after addition
// let arr = [-5, -4, -3, -2, 1, 2, 4, 5]
// function pair(arr) {
//     let j = arr.length - 1;
//     let i = 0
//     while (i < j) {
//         if (arr[i] + arr[j] == 6) {
//             return ([arr[i], arr[j]])
//         }
//         else if (arr[i] + arr[j] > 6) {
//             j = j - 1
//         }
//         else (arr[i] + arr[j] < 6)
//         i = i + 1
//     }
//     return false
// }
// console.log(pair(arr))

//=================================================


// find pair which is close to 12
let arr = [1, 2, 5, 8, 9, 14]
function closest() {
    let sum = 0;
    let result = []
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (arr[i] + arr[j] - 12 < sum) {
            result = [arr[i], arr[j]]
            sum += arr[i] + arr[j] - 12
        }
        else if (arr[i] + arr[j] - 12 > 0) {
            j = j - 1
        } else (arr[i] + arr[j] < 0)
        i = i + 1
    }
    return result
}

console.log(closest(arr))

// by pritesh sir

//=====================================================

// by shadab

// given a sorted array of integer find whether a pair exist with given sum

const array = [1, 4, 5, 7, 9, 10]
// function isSumPresent(sum){
//     let isPair = false;
//     for(let i = 0; i < array.length; i++){
//         for(let j = i + 1; j < array.length; j++){
//             // console.log(array[i], " ", array[j])
//             if(array[i] + array[j] == sum){
//                 isPair = true;
//             }
//         }
//     }
//     return isPair
// }

// console.log(isSumPresent(11))


function optimal(sum) {
    let left = 0;
    let right = array.length - 1;
    let isPairExist = false;
    while (left < right) {
        if (array[left] + array[right] === sum) {
            isPairExist = true;
            break;
        } else if (array[left] + array[right] > sum) {
            right--;
        } else {
            left--;
        }
    }
    return isPairExist;
}

console.log(optimal(11))

