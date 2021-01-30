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

def is_numeric(token):
    return re.match(r'^[0-9]+$', token)


def is_name(token):
    return re.match(r'^[A-Za-z]+$', token)


def parse(code):
    tokens = []
    position = 0

    def peek():
        return tokens[position]

    def consume():
        position += 1
