package parser

import "./lexer"

type Parser struct {
  position int
  tokens []lexer.Token
  ast AstNode
}

func New(tokens []Token) *Parser {
  p := &Parser{tokens: tokens}
  p.ast = p.parseExpr()
  return p
}
