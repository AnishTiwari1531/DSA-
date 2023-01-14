// through iteration
// n! = n * n - 1 * n - 2 * n - 3 * n - 4 ........... * 2 * 1
function fact(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result = result * i
    }
    return result;
}

console.log(fact(10))


// through recursion
// fact(n) = n * fact(n - 1)
// fact(n) = n * n - 1 * fact(n - 2)
// fact(n) = n * n - 1 * n - 2 * fact(n - 3)
// fact(n) = n * n - 1 * n - 2 * n - 3 ............. 1


function factorial(n) {
    if (n == 1) return 1;
    else
        return n * factorial(n - 1)
}

console.log(factorial(5))

// fibonacci series
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89....................
// fib(5) = fib(4) + fib(3)
// fib(n) = fib(n -1) + fib(n -2)
function fib(n) {
    if (n <= 2) return 1;
    else
        return fib(n - 1) + fib(n - 2)
}
console.log(fib(10))


//product of array
function product(arr) {
    if (arr.length == 0) return 1;
    else
        return arr[0] * product(arr.slice(1))
}
console.log(product([3, 5, 2, 1, 3]))


// power

function pow(b, exp) {
    if (exp == 0) return 1;
    return b * pow(b, exp - 1)
}

console.log(pow(2, 10))

// by pritesh

//---------------------------------------------------------

// by shdab
