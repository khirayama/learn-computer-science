import re


def tokenize(code):
    token_regexp = r'\s*([A-Za-z]+|[-1-9]+|\S)\s*'

    return re.findall(token_regexp, code, re.S)


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
