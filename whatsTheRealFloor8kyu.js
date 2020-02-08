// takes a number and returns the floor according to american standards. sub zero floors are negative, ground floors are 1
// and there are no 13th floors.
function getRealFloor(n) {
    return n > 13 ? n - 2 : n <= 0 ? n : n - 1;
    }