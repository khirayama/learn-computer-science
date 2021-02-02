package main

import (
	"testing"
)

func TestLexer(t *testing.T) {
  New("123\n")
  New("2+2")
  New("+-*/")
  New("   1   * 24 +\n\n  pi")
  New("()")
  New("    ")
  // l := NewLexer("123\n")
  // fmt.Printf(l.tokens)
}
