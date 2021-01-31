package main

type Token = string

type Lexer struct {
  input string
  tokens []Token
}

func NewLexer(input string) *Lexer {
  l := new(Lexer)
  return l
}

func (l Lexer) tokenize(input string) []Token {
  return []
}
