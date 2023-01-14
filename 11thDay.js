// capitalise
function capital(arr) {
    let result = [];
    if (arr.length === 0) {
        return [];
    }
    let s = arr[0][0].toUpperCase() + arr[0].slice(1)
    result.push(s)
    return result.concat(capital(arr.slice(1)))
};

console.log(capital(['anish', 'kumar', 'tiwari']))         // ['Anish', 'Kumar', 'Tiwari' ]

// reverse the words of sentence in its own palce
// "hey! love" => "!yeh eovl"

function rev(str) {
    if (str.length === 0) {
        return ""
    }
    return rev(str.slice(1)) + str[0]
}
console.log(rev("hey! love"))        // normal reverse == evol !yeh

function revWord(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = rev(words[i])
    }
    return words.join(" ")
}
let sentence = "I am Anish Tiwari"
console.log(revWord(sentence))



// count no of duplicates
// print duplicates in an array

function duplicate(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) == undefined) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    // return map
    let res = []
    for (let pair of map) {
        if (pair[1] > 1) {
            res.push(pair[0])
        }
    }
    return res
}
console.log(duplicate([23, 1, 21, 2, 1, 2, 3, 4, 5, 3, 4, 5, 6]))