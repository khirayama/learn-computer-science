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

	tokens = New("2+2").tokens
	expected = []string{"2", "+", "2"}
	if diff := deep.Equal(tokens, expected); diff != nil {
		t.Error(diff)
	}

	tokens = New("+-*/").tokens
	expected = []string{"+", "-", "*", "/"}
	if diff := deep.Equal(tokens, expected); diff != nil {
		t.Error(diff)
	}

	tokens = New("   1   * 24 +\n\n  pi").tokens
	expected = []string{"1", "*", "24", "+", "pi"}
	if diff := deep.Equal(tokens, expected); diff != nil {
		t.Error(diff)
	}

	tokens = New("()").tokens
	expected = []string{"(", ")"}
	if diff := deep.Equal(tokens, expected); diff != nil {
		t.Error(diff)
	}

	tokens = New("    ").tokens
	expected = []string{}
	if diff := deep.Equal(tokens, expected); diff != nil {
		t.Error(diff)
	}
}
