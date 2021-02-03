package lexer

import (
	"testing"
  "github.com/go-test/deep"
)

func TestLexer(t *testing.T) {
  tokens := New("123\n").tokens
  expected := []string{"123"}
  if diff := deep.Equal(tokens, expected); diff != nil {
    t.Error(diff)
  }
  // NewLexer("2+2")
  // NewLexer("+-*/")
  // NewLexer("   1   * 24 +\n\n  pi")
  // NewLexer("()")
  // NewLexer("    ")
  // l := NewLexer("123\n")
  // fmt.Printf(l.tokens)
}
