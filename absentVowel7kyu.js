function absentVowel(x) {

    let strArr = x.match(/[aeiou]/gi);
    if (!strArr.includes("a")) {
        return 0;
    }
    if (!strArr.includes("e")) {
        return 1;
    }
    if (!strArr.includes("i")) {
        return 2;
    }
    if (!strArr.includes("o")) {
        return 3;
    }
    if (!strArr.includes("u")) {
        return 4;
    }

}