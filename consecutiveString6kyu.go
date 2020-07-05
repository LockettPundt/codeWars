package kata

import "strings"

// You are given an array strarr of strings and an integer k.
// Your task is to return the first longest string consisting of
//  k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

func LongestConsec(strarr []string, k int) string {
	var result = ""
	if len(strarr) == 0 || k > len(strarr) || k <= 0 {
		return result
	}
	for i := 0; i < len(strarr); i++ {
		if i+k-1 < len(strarr) {
			temp := strings.Join(strarr[i:i+k], "")
			if len(temp) > len(result) {
				result = temp
			}
		}
	}
	return result
}
