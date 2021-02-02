package main

import (
	"testing"
)

func TestLexer(t *testing.T) {
  NewLexer("123\n")
  NewLexer("2+2")
  NewLexer("+-*/")
  NewLexer("   1   * 24 +\n\n  pi")
  NewLexer("()")
  NewLexer("    ")
  // l := NewLexer("123\n")
  // fmt.Printf(l.tokens)
}
