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

function peek(tokens, position) {
  return tokens[position];
}

function consume(position, token, tokens) {
  assert.strictEqual(token, tokens[position]);
  return position + 1;
}

function parse(code) {
  const tokens = tokenize(code);
  let position = 0;

  function parsePrimaryExpr() {
    const t = peek(tokens, position);

    if (isNumeric(t)) {
      position = consume(position, t, tokens);
      return {
        type: 'number',
        value: t,
      };
    } else if (isName(t)) {
      position = consume(position, t, tokens);
      return {
        type: 'name',
        id: t,
      };
    } else if (t === '(') {
      position = consume(position, t, tokens);
      const expr = parseExpr();
      if (peek(tokens, position) !== ')') {
        throw new SyntaxError('expected )');
      }
      position = consume(position, ')', tokens);

      return expr;
    } else {
      throw new SyntaxError('Expected a number, a variable, or parentheses');
    }
  }

  function parseMulExpr() {
    let expr = parsePrimaryExpr();
    let t = peek(tokens, position);
    while (t === '*' || t === '/') {
      position = consume(position, t, tokens);
      const rhs = parsePrimaryExpr();
      expr = {
        type: t,
        left: expr,
        right: rhs,
      };
      t = peek(tokens, position);
    }
    return expr;
  }

  function parseExpr() {
    let expr = parseMulExpr();
    let t = peek(tokens, position);
    while (t === '+' || t === '-') {
      position = consume(position, t, tokens);
      const rhs = parseMulExpr();
      expr = {
        type: t,
        left: expr,
        right: rhs,
      };
      t = peek(tokens, position);
    }
    return expr;
  }

  const result = parseExpr();

  if (position !== tokens.length) {
    throw new SyntaxError("Unexpected '" + peek(tokens, position) + "'");
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
