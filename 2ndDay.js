// function addUpToFirst(n) {
//     var total = 0;
//     for (var i = 0; i <= n; i++) {
//         total += i;
//     }
//     return total;
// };
// console.log(addUpToFirst(10));

//-----------------------------------------------

// function addUpToSecond(n) {
//     return n * (n + 1) / 2
// };
// console.log(addUpToSecond(6));


//-----------------------------------------------

// function countUpandDown(n) {
//     console.log("Going Up!");
//     for (var i = 0; i < n; i++) {
//         console.log(i)
//     }
//     console.log("at the top!\nGoing Down!");
//     for (var j = n - 1; j >= 0; j--) {
//         console.log(j)
//     }
//     console.log("Back down! Bye.....")
// };
// console.log(countUpandDown(5));

//-----------------------------------------------

// function printAllPairs(n) {
//     for (var i = 0; i <= n; i++) {
//         for (var j = 0; j < n; j++) {
//             console.log(i, j)
//         }
//     }
// };
// console.log(printAllPairs(3));

//-----------------------------------------------

// function numberOfHalves(n) {
//     var count = 0;
//     while (n > 1) {
//         n /= 2;
//         count++;
//     }
//     return count;
// };
// console.log(numberOfHalves(4));

//-----------------------------------------------

// function totalNumberOfHalves(n) {
//     var total = 0;
//     for (var i = 0; i < n; i++) {
//         total += numberOfHalves(n)
//     }
//     return total;
// };
// console.log(totalNumberOfHalves(6));


// -------- Till this by pritesh Sir
//-----------------------------------------------

// by shadab

// var arr = [5, 6, 7, 87, 8];                 // best
// var msg = "Element is not present";
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//         msg = "Element is present";
//         break;
//     }
// }
// console.log(msg, i)


// var arr = [6, 7, 87, 8, 5];           // worst
// var msg = "Element is not present";
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//         msg = "Element is present";
//         break;
//     }
// }
// console.log(msg, i)


// var arr = [6, 7, 5, 87, 8];           // avg
// var msg = "Element is not present";
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//         msg = "Element is present";
//         break;
//     }
// }
// console.log(msg, i)


// best.case O(1)  (Omega notation)
// avg.case O(n)  (theta notation)
// worst.case O(n)  (big O notation)


// Quick Sort 
// worst case O(n^2)
// avg case O(n log n)
// best case O(n log n)

// Space Complexity => Total space taken by the algorithm with respect to the input size.
// Analysis of Space => n(array size) + n + 1


// In array access of an element time complexity is O(1).
// Add Element in end of the array O(1) arr.push(10).
// Remove Element from the end of the array O(1) arr.pop().
// Insertion in beginning of the array.
// Opeartion performed (insertion O(1) + rearrangement of index O(n))
// Total time complexity of insertion in beginning of the array is O(n).
// Insertion in the middle of the arr. O(1) O(n).


var obj = {};
obj.firstName = "Anish";
obj.lastName = "Tiwari";
obj.age = 22;
obj.designation = "Backend Developer";

// access time complexity
console.log(obj);        // O(1)
console.log(obj.firstName, obj['firstName']);           // O(1)

// deletion -- O(1)
// Searching -- O(n)

console.log(Object.keys(obj));     // O(n)
console.log(Object.values(obj));   // O(n)
console.log(Object.entries(obj));  // O(n)    // entries-- key values pairs ko array mein convert karega 2Darray

// Object.hasOwmProperty -- O(1)
console.log(obj.hasOwnProperty("hobbies"));     // O(1)
console.log(obj.hasOwnProperty("age"));         // O(1) 

// ---------------------------------------------------------

