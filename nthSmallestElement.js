//takes 2 argument (arr, pos) and returns the nth smallest integer in the arr.
function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b)[pos - 1]
}