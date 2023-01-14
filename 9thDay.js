// write a program to reverse a string.
// "hello" = "olleh"
// "fur" = "ruf"

function reverse(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0]
};
console.log(reverse("Hi There"))
console.log(reverse("12121345"))




// check if a string is a palindrome or not 

function isPlr(str) {
    if (str.length <= 1) {
        return true;
    }
    else {
        return (str[0] == str.slice(-1) && isPlr(str.slice(1, -1)))
    }
}

console.log(isPlr("12321"))
console.log(isPlr("madam"))
console.log(isPlr("madm"))

function isPlr2(str) {
    if (str.length <= 1) return true;
    if (str[0] == str.slice(-1)) return isPlr2(str.slice(1, -1))
    else
        return false
}

console.log(isPlr2("refer"))
console.log(isPlr2("ytaha"))




// program to flatten an array 
// [1, 2, [3, 4, 5,], [6, 7]]

function flattenArr(arr) {
    let flat = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]))
            flat = flat.concat(flattenArr(arr[i]));
        else
            flat.push(arr[i]);
    }
    return flat;
}

console.log(flattenArr([1, 2, [3, 4, 5,], [6, 7]]));
console.log(flattenArr(['a', 'b', ['c', [[['d', 'e']]]]]));



// program to capitalise the first letter of all strings in an array of strings.

// ["hi", "hello", "hola"] = ["Hi", "Hello", "Hola"]


function capitalizeWords(arr) {
    return arr.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
}

console.log(capitalizeWords(["hi", "hello", "hola"]));



//=================================================
// by shdab
function reverseArray(arr, left, right) {
    if (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        reverseArray(arr, left + 1, right - 1)
    }
}
let str = "aabcdad";
const arr = str.split("");
reverseArray(arr, 0, arr.length - 1)
str = arr.join("")
console.log(str)


function reverseString(str) {
    if (str.length == 1) return str;
    return reverse(str.slice(1)) + str[0]
}

console.log(reverseString("ANISH"))


function isPalindrome(str, left, right) {
    if (left < right) {
        if (str[left] === str[right]) {
            return isPalindrome(str, left + 1, right - 1);
        } else {
            return false
        }
    }
    return true
}

console.log(isPalindrome("NamaN", 0, 4))
console.log(isPalindrome("ANISH", 0, 4))
