// https://jorendorff.github.io/calc/docs/calculator-backends.html
const assert = require('assert');

function tokenize(code) {
  const results = [];
  const tokenRegExp = /\s*([A-Za-z]+|[-1-9]+|\S)\s*/g;

  let m = tokenRegExp.exec(code);
  while (m !== null) {
    results.push(m[1]);
    m = tokenRegExp.exec(code);
  }
  return results;
}

function isNumeric(token) {
  return token !== undefined && token.match(/^[0-9]+$/) !== null;
}

function isName(token) {
  return token !== undefined && token.match(/^[A-Za-z]+$/) !== null;
}

function parse(code) {
  const tokens = tokenize(code);
  let position = 0;

  function peek() {
    return tokens[position];
  }

  function consume(token) {
    assert.strictEqual(token, tokens[position]);
    position++;
  }

  function parsePrimaryExpr() {
    const t = peek();

    if (isNumeric(t)) {
      consume(t);
      return {
        type: 'number',
        value: t,
      };
    } else if (isName(t)) {
      consume(t);
      return {
        type: 'name',
        id: t,
      };
    } else if (t === '(') {
      consume(t);
      const expr = parseExpr();
      if (peek() !== ')') {
        throw new SyntaxError('expected )');
      }
      consume(')');

      return expr;
    } else {
      throw new SyntaxError('expected a number, a variable, or parentheses');
    }
  }

  function parseMulExpr() {
    let expr = parsePrimaryExpr();
    let t = peek();
    while (t === '*' || t === '/') {
      consume(t);
      const rhs = parsePrimaryExpr();
      expr = {
        type: t,
        left: expr,
        right: rhs,
      };
      t = peek();
    }
    return expr;
  }

  function parseExpr() {
    let expr = parseMulExpr();
    let t = peek();
    while (t === '+' || t === '-') {
      consume(t);
      const rhs = parseMulExpr();
      expr = {
        type: t,
        left: expr,
        right: rhs,
      };
      t = peek();
    }
    return expr;
  }

  const result = parseExpr();

  if (position !== tokens.length) {
    throw new SyntaxError("Unexpected '" + peek() + "'");
  }

  return result;
}

function evaluate(code) {
  const variables = {
    e: Math.E,
    pi: Math.PI,
  };

  function evalu(obj) {
    switch (obj.type) {
      case 'number':
        return parseInt(obj.value);
      case 'name':
        return variables[obj.id] || 0;
      case '+':
        return evalu(obj.left) + evalu(obj.right);
      case '-':
        return evalu(obj.left) - evalu(obj.right);
      case '*':
        return evalu(obj.left) * evalu(obj.right);
      case '/':
        return evalu(obj.left) / evalu(obj.right);
    }
  }

  return evalu(parse(code));
}

module.exports = { tokenize, isNumeric, isName, parse, evaluate };
