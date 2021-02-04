package lexer

import (
	"regexp"
	"strings"
)

type Token = string

type Lexer struct {
  input string
  tokens []Token
}

func New(input string) *Lexer {
  l := &Lexer{input: input}
  l.tokens = l.tokenize(l.input)
  return l
}

func (l Lexer) tokenize(input string) []Token {
  result := []Token{}

  r := regexp.MustCompile(`\s*([A-Za-z]+|[-1-9]+|\S)\s*`)
  strs := r.FindAllString(input, -1)
  for _, str := range strs {
    result = append(result, strings.TrimSpace(str))
  }
  return result
}
