// This is a go programming file
package main

import (
	"bufio"
	"fmt"
	"os"
)	

func main() {	
	f, err := os.Open("file1.go")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer f.Close()

	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}
	if err := scanner.Err(); err != nil {
		fmt.Println(err)
	}
}