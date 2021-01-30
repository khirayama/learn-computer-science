import math
import re


variables = {
  'e': math.e,
  'pi': math.pi,
}


class Lexer:
    def __init__(self, inpt):
        self.input = inpt
        self.tokens = self.tokenize(self.input)

    def tokenize(self, inpt):
        token_regexp = r'\s*([A-Za-z]+|[-1-9]+|\S)\s*'

        return re.findall(token_regexp, inpt, re.S)


class Parser:
    def __init__(self, tokens):
        self.position = 0
        self.tokens = tokens

        self.ast = self.parseExpr()

    def is_numeric(self, token):
        return re.match(r'^[0-9]+$', token)

    def is_name(self, token):
        return re.match(r'^[A-Za-z]+$', token)

    def peek(self):
        if len(self.tokens) <= self.position:
            return None
        return self.tokens[self.position]

    def consume():
        position += 1
