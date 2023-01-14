// Practice Problems
// Q-1 we have given array as input cotaining O's and 1's we need to sort the array


// 1st way
function sort01(arr) {
    let curr = 0;
    let count0 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count0++
        }
    }
    let count1 = arr.length - count0;
    while (count0 > 0) {
        arr[curr] = 0;
        count0--;
        curr++;
    }
    while (count1 > 0) {
        arr[curr] = 1;
        count1--;
        curr++;
    }
    return arr
}

console.log(sort01([0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1]))


//  2nd way
function sort2(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        while (arr[left] === 0 && left < right) {
            left++;
        }
        while (arr[right] === 1 && left < right) {
            right--;
        }
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    }
    return arr
}
// console.log(sort2([0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1]))

// Q-2 In an array find the element without a pair

function withoutPair(arr) {
    let map = new Map()
    for (let curr of arr) {
        if (map.get(curr)) {
            map.set(curr, map.get(curr) + 1)
        } else {
            map.set(curr, 1)
        }
    }
    let res = []
    for (let value of map) {
        if (value[1] % 2 === 1) {
            res.push(value[0])
            // console.log("without pair", value[0])
        }
    }
    return res.join(" ")
}
// console.log(withoutPair([1, 2, 2, 1, 3, 3, 4, 4, 5, 6, 7]))


// Q-3 Write a function to calculate the max sum of three consecutive elements in an array

// 1st way
function maxSumOfThreeConsecutiveElements(arr) {
    if (arr.length < 3) {
        return
    }
    let currMax = -Infinity;
    for (let i = 0; i < arr.length - 3; i++) {
        if (arr[i] + arr[i + 1] + arr[i + 2] > currMax) {
            currMax = arr[i] + arr[i + 1] + arr[i + 2]
        }
    }
    return currMax;
}
// console.log(maxSumOfThreeConsecutiveElements([1, 2, 3, 4, 5, 6, 4, 2, 55, 77, 22, 33, 44, 77]))


// Q-4 Write a function to calculate the max sum of n consecutive elements in an array

// 1st way
function maxSumOfNConsecutiveElements(arr, k) {
    if (arr.length < k) {
        return
    }
    let currMax = -Infinity;
    for (let i = 0; i < arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j < k + i; j++) {
            sum += arr[j]
        }
        if (sum > currMax) {
            currMax = sum
        }
    }
    return currMax
}

// console.log(maxSumOfNConsecutiveElements([1, 2, 3, 4, 5, 6, 4, 2, 55, 77, 22, 33, 44, 77], 3))

// 2nd way

function maxSumWithSlideWindow(arr, k) {
    if (arr.length < k) {
        return
    }
    let currMax = -Infinity;
    let totalSum = 0;
    let leftWindowItemSum = 0;
    for (let i = 0; i < k; i++) {
        totalSum += arr[i]
    }
    currMax = totalSum;
    for (let i = k; i < arr.length; i++) {
        leftWindowItemSum += arr[i - k];
        totalSum += arr[i];
        if (totalSum - leftWindowItemSum > currMax) {
            currMax = totalSum - leftWindowItemSum
        }
    }
    return currMax
}
// console.log(maxSumWithSlideWindow([1, 2, 3, 4, 5, 6, 4, 2, 55, 77, 22, 33, 44, 77], 3))

//===============================================================================

// function check(str) {
//     let map = new Map();
//     for (let curr of str) {
//         if (map.get(curr)) {
//             map.set(curr, map.get(curr) + 1)
//         } else {
//             map.set(curr, 1)
//         }
//     }
//     let res = []
//     for (let val of map) {
//         if (val[1] % 2 === 1) {
//             res.push(val[0])
//         }
//     }
//     return res
// }

// console.log(check("ababaaabcbcb"))
