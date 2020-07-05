package kata

import (
	"strings"
)

// In this simple Kata your task is to create a function that turns a
// string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.

func wave(words string) []string {
	var result = make([]string, 0)
	for i, value := range words {
		var wave string
		if string(value) != " " {
			if i == len(words)-1 {
				wave = string(words[:i]) + strings.ToUpper(string(value))
				result = append(result, wave)
			} else {
				wave = string(words[:i]) + strings.ToUpper(string(value)) + string(words[i+1:])
				result = append(result, wave)
			}
		}
	}
	return result
}
