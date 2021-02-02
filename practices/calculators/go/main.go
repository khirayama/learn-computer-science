package main

import (
	"fmt"
	"regexp"
	"strings"
)

type Token = string

type Lexer struct {
  input string
  tokens []Token
}

func NewLexer(input string) *Lexer {
  l := new(Lexer)
  l.input = input
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
  fmt.Println(strings.Join(result, ","))
  return result
}
