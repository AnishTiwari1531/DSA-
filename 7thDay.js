// Recursion
// by iteration
let arr = [14, 8, 7, 77, 70, 63, 23, 101, 42, 45]
function divisible(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 7 == 0) {
            console.log(arr[i], " true");
        } else {
            console.log(arr[i], " false")
        }
    }
    return " "
}

console.log(divisible([14, 8, 7, 77, 70, 63, 23, 101, 42, 45]))

// by recursion
function div(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        let el = arr.pop();
        if (el % 7 == 0) {
            console.log(el, " true")
            div(arr)
        } else {
            console.log(el, " false")
            div(arr)
        }
    }
    return " "
}

console.log(div([14, 8, 7, 77, 70, 63, 23, 101, 42, 45]))



// function to countDown n to 1.

// by iteration
// by for loop
// function countDown(n) {
//     for (let i = n; i >= 0; i--) {
//         console.log(i)
//     }
//     return " "
// }

// console.log(countDown(4))


// by while loop
function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
    return " "
}

console.log(countDown(4))



// by recursion
function countDown1(n) {
    if (n == 0) {
        return 0;
    } else {
        console.log(n);
        n--;
        countDown1(n);
    }
    return " "
}

console.log(countDown1(5))



// function to return the sum of 1 to n
// not he ideal way
function sumUpTo1(n) {
    let sum = 0
    if (n == 1) {
        return 1;
    } else {
        sum += n;
        n--;
        sumUpTo(n)
    }
    return sum
}
console.log(sumUpTo1(4))

// best way for interview
function sumUpTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumUpTo(n - 1)
    }
}

console.log(sumUpTo(5))



//  basic mistakes
// miss the base setup
// forget to return for the base case
// returning the wrong thing


// by pritesh sir

//====================================================


// by shdab



let numArray = [1, 2, 3, 4, 5, 6, 7]

// function printArrayRecursive(index) {
//     if (index < 0) {
//         return 0
//     }
//     console.log(numArray[index])
//     index = index + 1;
//     printArrayRecursive(index)
//     console.log("id is ", index)
// }
// console.log(printArrayRecursive())


function recursiveReverse(index) {
    if (index >= numArray.length) {
        return
    }
    index = index + 1;
    recursiveReverse(index);
    console.log(numArray[index - 1])
}
recursiveReverse(0)
