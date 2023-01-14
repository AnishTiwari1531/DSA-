// Q- write a function to merge these two arrays & result should be like this.
let arr = [
    { name: "a", value: 123 },
    { name: "b", value: 666 },
];
let arr2 = [
    { name: "c", value: 444 },
    { name: "d", value: 999 },
    { name: "b", value: 111 },
];

// result = [
//     { name: "a", value: 123 },
//     { name: "b", value: 111 },
//     { name: "c", value: 444 },
//     { name: "d", value: 999 },
// ];
function mergeArray(arr, arr2, result = []) {
    let arrCurrIndex = 0;
    let arr2CurrIndex = 0;
    let obj = {};
    while (arrCurrIndex < arr.length && arr2CurrIndex < arr2.length) {
        if (arr[arrCurrIndex].name > arr2[arr2CurrIndex].name) {
            if (!obj[arr2[arr2CurrIndex].name])
                result.push(arr2[arr2CurrIndex]);
            else {
                result[obj[arr2[arr2CurrIndex].name]] = arr2[arr2CurrIndex]
            }
            obj[arr2[arr2CurrIndex].name] = result.length - 1;
            arr2CurrIndex++;
        }
        else {
            if (!obj[arr[arrCurrIndex].name])
                result.push(arr[arrCurrIndex]);
            else {
                result[obj[arr[arrCurrIndex].name]] = arr[arrCurrIndex]
            }
            obj[arr[arrCurrIndex].name] = result.length - 1;
            arrCurrIndex++;
        }
    }
    while (arr2CurrIndex < arr2.length) {
        if (!obj[arr2[arr2CurrIndex].name])
            result.push(arr2[arr2CurrIndex]);
        else {
            result[obj[arr2[arr2CurrIndex].name]] = arr2[arr2CurrIndex]
        }
        obj[arr2[arr2CurrIndex].name] = result.length - 1;
        arr2CurrIndex++;
    }
    while (arrCurrIndex < arr.length) {
        if (!obj[arr[arrCurrIndex].name])
            result.push(arr[arrCurrIndex]);
        else {
            result[obj[arr[arrCurrIndex].name]] = arr[arrCurrIndex]
        }
        obj[arr[arrCurrIndex].name] = result.length - 1;
        arrCurrIndex++;
    }
};
let result = [];
mergeArray(arr, arr2, result);
console.log(result)

// Q-2 find maximum word in a sentence 

function maxWord(sentence) {
    let max = 0;
    for (let currSentence of sentence) {
        let currWordCount = currSentence.split(" ").length
        if (currWordCount > max) {
            max = currWordCount
        }
    }
    return max
};
console.log(maxWord(["Please Wait", "Continue To Fight", "Continue to win", "I am going to America"]))



// Q-3 find square root
function squareRoot(number, left, right) {
    let mid = (left + right) / 2;
    let mul = mid * mid;
    if (mul === number || (Math.abs(mul - number) < 0.00001)) {
        return mid;
    } else if (mul > number) {
        // return squareRoot(number, left, mid);
        right = mid;
    } else {
        // return squareRoot(number, mid, right)
        left = mid
    }
}

function findSqrt(number) {
    let found = false;
    let i = 1;
    while (found === false) {
        if (i * i === number) {
            found = true;
        } else if (i * i > number) {
            var res = squareRoot(number, i - 1, i)
            console.log(+res.toFixed(5))
            found = true;
        }
        i++;
    }
}