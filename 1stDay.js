let fact = 1;
let i = 2;

do {
    fact = fact * i;
    i = i + 1;
}
while (i <= 2);
// while (i <= n);
console.log(fact)
// console.log(i)

//=================================================

// let a = 5;
// let b = 6;

// if (a > b) {
//     console.log("A is largest")
// } else {
//     console.log("B is largest")
// }

// let a = 4;
// let b = 6;
// let c = 8;

// if (a > (b && c)) {
//     console.log(" A is largest ")
// } else if (b > (a && c)) {
//     console.log(" B is largest ")
// } else {
//     console.log(" C is largest ")
// }


//=================================================

// write a program to sum 1 to any number

// 1st way
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum)
// its gonna take O(100) units of steps


// 2nd way
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     sum = sum + i;
// }
// console.log(sum)

// It's gonna take O(n) units of steps


// 3rd way by the formula for sum of first n natural numbers 
// let sum = n * (n + 1) / 2
// let sum = 100 * (100 + 1) / 2
// console.log(sum)
// its gonna take O(1) units of steps

//=================================================

// write a program to swap two numbers..   // two ways are there
// 1st way using 3rd variable
let a = 5;
let b = 6;

let c = a;
a = b;
b = c;

// console.log(" value of a is :" + a);
// console.log(" value of b is :" + b);


// Till this by pritesh sir


//====================================================================================
// by Shadab Khan


let arr = [2, 4, 5, 6, 7, 9, 11, 13, 14];
let even = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
        even = even + 1;
    }
}
// console.log(even);



// find largest element in an array

let arr1 = [2, 4, 9, 5, 6, 7];
let max = arr1[0]
for (let i = 0; i < arr1.length; i++) {
    if (arr[i] > max)
        max = arr[i]
}
// console.log("Largest in given array is " + max)

//=====================================================================================