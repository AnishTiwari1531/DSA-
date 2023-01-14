// sliding window pattern in string
let str = "HelloWorld"
function slideString(str) {
    let indexStart = 0;
    let indexLast = 0;
    let SwStart = 0;
    let SwLast = 0;
    let windowMap = {}
    while (SwLast <= str.length) {
        if (!windowMap[str[SwLast]]) {
            windowMap[str[SwLast]]
            if (SwLast - SwStart > indexLast - indexStart) {
                indexStart = SwStart;
                indexLast = SwLast;
            }
            SwLast++
        }
        else {
            while (str[SwStart] != str[SwLast]) {
                SwStart++;
                windowMap.delete([str[SwStart]])
            }
        }
        return (indexLast, indexStart)
    }
}
console.log(slideString("HelloWorld"))



//=======================================
function longestSub(str) {
    if (str.length === 0) {
        return 0;
    }

    let start = 0;
    let lastOccurence = {};
    let max_Window_size = 1;
    for (let end = 0; end < str.length; end++) {
        if (lastOccurence[str[end]] != undefined && lastOccurence[str[end]] >= 0) {
            start = Math.max(start, lastOccurence[str[end]] + 1)
        }
        lastOccurence[str[end]] = end;
        max_Window_size = Math.max(max_Window_size, end - start + 1)
    }
    return max_Window_size
}
console.log(longestSub("abcabcdabcdeabcdefabcdefgabc"))