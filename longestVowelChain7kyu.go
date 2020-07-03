package kata

// The vowel substrings in the word codewarriors are o,e,a,io.
// The longest of these has a length of 2. Given a lowercase string
// that has alphabetic characters only and no spaces, return the
// length of the longest vowel substring. Vowels are any of aeiou.

func Solve(s string) int {
	vowels := []string{"a", "e", "i", "o", "u"}
	current := 0
	longest := 0
	for i := 0; i < len(s); i++ {
		temp := false
		for _, j := range vowels {
			if string(s[i]) == j {
				temp = true
			}
		}
		if temp {
			current += 1
			if current >= longest {
				longest = current
			}
		} else {
			current = 0
		}
		temp = false
	}
	return longest
}
