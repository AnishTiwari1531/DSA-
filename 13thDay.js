// rotate an array by k element
// [1, 2, 3, 4, 5] = k = 2 
// first rotation = [5, 1, 2, 3, 4]
// second rotation = [4, 5, 1, 2, 3]

function rotateArray(arr, k) {
    let temp = (new Array(arr.length)).fill(0)
    for (let i = 0; i < arr.length; i++) {
        let shiftIndex = (i + k) % arr.length;
        temp[shiftIndex] = arr[i]
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i]
    }
    return arr
}

console.log(rotateArray([1, 2, 3, 4, 5], 3))


