// Important Questions for Inteview
// Q- filter the duplicate in an array and give the unique elements in arr.
// 1st way
let arr = [1, 1, 2, 3, 2, 1, 3, 4, 5, 6, 6, 7, 7, 7]
function duplicate(arr) {
    let set = new Set(arr)
    return [...set];
}

console.log(duplicate(arr))

// 2nd Way
function removeDuplicate(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) === undefined) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    let result = [];
    let count = 0;
    for (let pair of map) {
        if (pair[1] === 1) {
            result.push(pair[0])
            count++
        }
    }
    return (`${result}, ${count}`)
}
console.log(removeDuplicate([1, 1, 2, 3, 2, 1, 3, 4, 5, 6, 6, 7, 7, 7]))


// Q-2 Take input and if input is divisble by 3 give "Foo" and if divisle by 5 give "Bar" and if divisble by 3 and 5 then print "FooBar" and if not a multiple of either then print nothing
// 1st Way
function div(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FooBar")
    } else if (num % 3 === 0 && num % 5 !== 0) {
        console.log("Foo")
    } else if (num % 5 === 0 && num % 3 !== 0) {
        console.log("Bar")
    } else {
        console.log("Nothing")
    }
    return ""
}
// console.log(div(9))

// 2nd Way 
function print(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FooBar')
        } else if (i % 3 === 0) {
            result.push('Foo')
        } else if (i % 5 === 0) {
            result.push('Bar')
        } else {
            result.push(i.toString())
        }
    }

    return result
};

// console.log(print(15))


// Q-3 Take input and check whether it's an integer or not
// 1st Way
function isValidNumber(input) {
    let num = true;
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= "0" && input[i] <= "9") {
            continue
        } else {
            num = false;
            break
        }
    }
    return num
}

// console.log(isValidNumber("1223ab"))

// 2nd way
function isVal(inp) {
    let pattern = new RegExp("^[0-9]+$")
    return pattern.test(inp)
}

console.log(isVal("21ad"))



// Q-4 Find the unique pair of elements whose sum is equal to target
function checkSum(arr, sum) {
    const elemSet = new Set();
    const seenSet = new Set();
    let count = 0;
    for (let currValue of arr) {
        let nextValue = sum - currValue
        if (elemSet.has(nextValue) && !seenSet.has(nextValue)) {
            count++;
            seenSet.add(nextValue);
            seenSet.add(currValue);
        }
        elemSet.add(currValue)
    }
    return count;
}
console.log(checkSum([1, 4, 6, 7, 8, 9, 8, 9, 0], 16))