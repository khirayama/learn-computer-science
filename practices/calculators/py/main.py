import re

def tokenize(code):
    results = []
    token_regexp = r'\s*([A-Za-z]+|[-1-9]+|\S)\s*'
    re_pattern = re.compile(token_regexp)

    return re.findall(token_regexp, code, re.S)

m = tokenize('2 + 2')
print(m)
