package main

import (
	"regexp"
	"strings"
)

type Token string

type NumberAstNode struct {
  category string // "number"
  value string
}

type NameAstNode struct {
  category string // "name"
  id string
}

type AstNode = NumberAstNode | NameAstNode

type Lexer struct {
  input string
  tokens []Token
}

func NewLexer(input string) *Lexer {
  l := &Lexer{input: input}
  l.tokens = l.tokenize(l.input)
  return l
}

func (l Lexer) tokenize(input string) []Token {
  result := []Token{}

  r := regexp.MustCompile(`\s*([A-Za-z]+|[-1-9]+|\S)\s*`)
  strs := r.FindAllString(input, -1)
  for _, str := range strs {
    result = append(result, Token(strings.TrimSpace(str)))
  }
  return result
}

type Parser struct {
  position int
  tokens []Token
  ast AstNode
}

func New(tokens []Token) *Parser {
  p := &Parser{tokens: tokens}
  p.ast = p.parseExpr()
  return p
}
