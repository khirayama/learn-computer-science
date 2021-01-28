// https://jorendorff.github.io/calc/docs/calculator-backends.html
const variables = {
  e: Math.E,
  pi: Math.PI,
};

class Lexer {
  constructor(input) {
    this.input = input;
    this.tokens = this.tokenize(this.input);
  }

  tokenize(input) {
    const results = [];
    const tokenRegExp = /\s*([A-Za-z]+|[-1-9]+|\S)\s*/g;

    let m = tokenRegExp.exec(input);
    while (m !== null) {
      results.push(m[1]);
      m = tokenRegExp.exec(input);
    }
    return results;
  }
}

class Parser {
  constructor(tokens) {
    this.position = 0;
    this.tokens = tokens;

    this.ast = this.parseExpr();

    if (this.position !== this.tokens.length) {
      throw new SyntaxError("Unexpected '" + peek() + "'");
    }
  }

  isNumeric(token) {
    return token !== undefined && token.match(/^[0-9]+$/) !== null;
  }

  isName(token) {
    return token !== undefined && token.match(/^[A-Za-z]+$/) !== null;
  }

  peek() {
    return this.tokens[this.position];
  }

  consume() {
    this.position += 1;
  }

  parsePrimaryExpr() {
    const t = this.peek();

    if (this.isNumeric(t)) {
      this.consume();
      return {
        type: 'number',
        value: t,
      };
    } else if (this.isName(t)) {
      this.consume();
      return {
        type: 'name',
        id: t,
      };
    } else if (t === '(') {
      this.consume();
      const expr = this.parseExpr();
      if (this.peek() !== ')') {
        throw new SyntaxError('expected )');
      }
      this.consume();

      return expr;
    } else {
      throw new SyntaxError('Expected a number, a variable, or parentheses');
    }
  }

  parseMulExpr() {
    let expr = this.parsePrimaryExpr();
    let t = this.peek();
    while (t === '*' || t === '/') {
      this.consume();
      const rhs = this.parsePrimaryExpr();
      expr = {
        type: t,
        left: expr,
        right: rhs,
      };
      t = this.peek();
    }
    return expr;
  }

  parseExpr() {
    let expr = this.parseMulExpr();
    let t = this.peek();
    while (t === '+' || t === '-') {
      this.consume();
      const rhs = this.parseMulExpr();
      expr = {
        type: t,
        left: expr,
        right: rhs,
      };
      t = this.peek();
    }
    return expr;
  }
}

function evaluate(node) {
  switch (node.type) {
    case 'number':
      return parseInt(node.value, 10);
    case 'name':
      return variables[node.id] || 0;
    case '+':
      return evaluate(node.left) + evaluate(node.right);
    case '-':
      return evaluate(node.left) - evaluate(node.right);
    case '*':
      return evaluate(node.left) * evaluate(node.right);
    case '/':
      return evaluate(node.left) / evaluate(node.right);
  }

  return evaluator(node);
}

function calculate(input) {
  const l = new Lexer(input);
  const p = new Parser(l.tokens);
  return evaluate(p.ast);
}

module.exports = { Lexer, Parser, evaluate, calculate };
