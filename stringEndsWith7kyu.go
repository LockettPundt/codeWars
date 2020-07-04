package kata

import "strings"

func solution(str, ending string) bool {
	if strings.HasSuffix(str, ending) {
		return true
	}
	return false
}
