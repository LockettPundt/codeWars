package kata

import (
	"strings"
)

func AbbrevName(name string) string {
	firstName, lastName :=
		strings.Split(name, " ")[0],
		strings.Split(name, " ")[1]
	return strings.Title(string(firstName[0])) + "." + strings.Title(string(lastName[0]))
}
