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

    def consume(self):
        self.position += 1

    def parsePrimaryExpr(self):
        t = self.peek()

        if self.is_numeric(t):
            self.consume()
            return {
                'type': 'number',
                'value': t
            }
        elif self.is_name(t):
            self.consume()
            return {
                'type': 'name',
                'id': t
            }
        elif t == '(':
            self.consume()
            expr = self.parseExpr()

            if self.peek() != ')':
                raise SyntaxError("expected )")
            self.consume()

            return expr
        else:
            raise SyntaxError('Expected a number, a variable, or parentheses')

    def parseMulExpr(self):
        expr = self.parsePrimaryExpr()
        t = self.peek()

        while t == '*' or t == '/':
            self.consume()
            rhs = self.parsePrimaryExpr()
            expr = {
                'type': t,
                'left': expr,
                'right': rhs
            }
            t = self.peek()

        return expr

    def parseExpr(self):
        expr = self.parseMulExpr()
        t = self.peek()

        while t == '+' or t == '-':
            self.consume()
            rhs = self.parseMulExpr()
            expr = {
                'type': t,
                'left': expr,
                'right': rhs
            }
            t = self.peek()

        return expr


def evaluate(node):
    if node['type'] == 'number':
        return float(node['value'])
    elif node['type'] == 'name':
        return variables[node['id']]
    elif node['type'] == '+':
        return evaluate(node['left']) + evaluate(node['right'])
    elif node['type'] == '-':
        return evaluate(node['left']) - evaluate(node['right'])
    elif node['type'] == '*':
        return evaluate(node['left']) * evaluate(node['right'])
    elif node['type'] == '/':
        return evaluate(node['left']) / evaluate(node['right'])


def calculate(inpt):
    lxr = Lexer(inpt)
    psr = Parser(lxr.tokens)
    return evaluate(psr.ast)
