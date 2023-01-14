// // Binary Search
// let arr = [3, 7, 11, 34, 78, 90, 92, 96, 98]

// function search(arr, start, end, num) {
//     if (end >= start) return
//     mid = Math.round(start + end) / 2;
//     if (num == arr[mid]) {
//         return mid
//     } else if (num > arr[mid]) {
//         return search(arr, mid + 1, end, num)
//     } else if (num < arr[mid]) {
//         return search(arr, start, mid - 1, num)
//     }
//     return false;
// }
// console.log(search(arr))

// Bubble Sort
let arr = [233, 75, 11, 34, 78, 40, 92, 96, 98]
function bubble(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let swap = false;
        for (let j = 0; j <= arr.length - 2; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1]
                arr[j + 1] = arr[j] - arr[j + 1]
                arr[j] = arr[j] - arr[j + 1]
                swap = true;
            }
        }
        if (swap == false)
            break;
    }
    return arr;
}

console.log(bubble(arr))


// Merge Sort
function mergeSort(arr, start, end) {
    if (start >= end) {
        return
    }
    let mid = Math.round(start + end) / 2;
    merge(arr, start, mid)
    merge(arr, mid + 1, end)
    merge(arr, start, mid + 1)
}
function merge(arr, start, mid, end) {
    let arr1 = [];
    let arr2 = [];
    let lenArr = mid - start + 1;
    let lenArr2 = end - mid;    // end - (mid + 1) + 1
    for (let i = 0; i < lenArr; i++) {
        arr1[i] = arr[start + i]
        for (let j = 0; j < lenArr; j++) {
            arr2[j] = arr[mid + 1 + j]
        }
        let a = 0, b = 0, c = start;
        while (a < lenArr && b < lenArr2) {
            if (arr1[a] <= arr2[b]) {
                arr[c] = arr1[a]
                a++
            } else {
                arr[c] = arr2[b]
                b++
            }
            c++
        }
        while (a < lenArr) {
            arr[c] = arr1[a]
            a++;
            c++;
        } while (b < lenArr2) {
            arr[c] = arr[b]
            b++;
            c++
        }
    }
}