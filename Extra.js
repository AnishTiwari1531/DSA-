function uniquePair(arr, target) {
    let map = new Map();
    for (el of arr) {
        map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1)
    }
    map.forEach((v, k) => {
        if (map.has(target - Number(k)))
            console.log(k, target - Number(k))
        map.delete(k)
    })
}
// uniquePair([1, 2, 3, 7, 4, 5, 6, 0], 7)


function check(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result = nums[i] * nums[i]
    }
    return result
}
console.log(check([-4, -1, 0, 3, 10]))