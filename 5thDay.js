// Sliding window
let arr = [23, 34, 6, 2, 43, 89, 9, 3, 2, 7]
function side(arr) {
    let k = 3;
    let maxSum = -Infinity;
    let subArray;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        if (sum > maxSum) {
            maxSum = sum
            subArray = [arr[i], arr[i + 1], arr[i + 2]]
        }
    }
    return [maxSum, subArray]
}

console.log(side([23, 34, 6, 2, 43, 89, 9, 3, 2, 7]))



// function slide(arr) {
//     let k = 3;
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < k)
//         return null;
//     for (let i = 0; i < k; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for (let i = k; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - k] + arr[i];
//         maxSum = Math.max(maxSum, tempSum)
//     }
//     return maxSum
// }

// console.log(slide([23, 34, 6, 2, 43, 44, 55, 66, 89, 45, 9, 3, 2, 7, 6, 5, 44, 33, 22]))

// till this pritesh sir

//============================================================================

// by shadab 

// let arr = [1, 3, -1, -3, 5, 3, 6, 7]
function slide2(arr, w) {
    let n = arr.length;
    let result = [];
    for (let i = 0; i < n - w + 1; i++) {
        let max = arr[i]
        for (let j = i; j < i + w; j++) {
            if (max < arr[j]) {
                max = arr[j]
            }
        }
        result.push(max)
    }
    return result
}

// console.log(slide2([1, 3, -1, -3, 5, 3, 6, 7], 2))


// let arr = [1, 3, 5, 0, 3, 2, 0, 1]
// function slide(arr) {
//     let n = arr.length;
//     let w = 3;
//     let result = [];
//     const deque = [];
//     for (let curr = 0; curr < n; curr++) {
//         while (deque.length > 0 && arr[curr] >= deque[deque.length - 1]) {
//             deque.pop()
//         }
//     }
//     for (let curr = 0; curr < n; curr++) {
//         result.push(arr[deque[0]])
//         while (deque.length > 0 && arr[curr] >= deque[deque.length - 1]) {
//             deque.pop()
//         }
//         while (deque.length > 0 && curr - w >= deque[0]) {
//             deque.shift()
//         }
//         deque.push(curr);
//     }
//     return (result.push(arr[deque[0]]))
// }

// console.log(slide([1, 3, 5, 0, 3, 2, 0, 1]))


// function maxSum(arr) {
//     let n = arr.length
//     let k = 5
//     let max = 0;
//     let sum = 0;
//     for (let i = 0; i < k; i++) {
//         sum += arr[i];
//         max = sum;
//     }
//     for (let i = k; i < n; i++) {
//         sum += arr[i] - arr[i - k];
//         if (sum > max) {
//             max = sum;
//         }
//     }
//     return max;
// }
// console.log(maxSum([1, 3, 5, 0, 3, 2, 0, 1]))