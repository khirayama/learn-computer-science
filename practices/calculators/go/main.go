package main

import (
  "strings"
  "fmt"
  "regexp"
)

type Token = string

type Lexer struct {
  input string
  tokens []Token
}

func NewLexer(input string) *Lexer {
  l := new(Lexer)
  l.input = input
  l.tokenize(l.input)
  return l
}

func (l Lexer) tokenize(input string) []Token {
  r := regexp.MustCompile(`\s*([A-Za-z]+|[-1-9]+|\S)\s*`)
  result := r.FindAllString(input, -1)
  s := strings.Join(result, ",")
  fmt.Println(s)
  return result
}
