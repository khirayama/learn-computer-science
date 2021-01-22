export function tokenize(code: string): string[] {
  const results: string[] = [];
  const tokenRegExp = /\s*([A-Za-z]+|[-1-9]+|\S)\s*/g;

  let m = tokenRegExp.exec(code);
  while (m !== null) {
    results.push(m[1]);
    m = tokenRegExp.exec(code);
  }

  return results;
}

export function isNumeric(token: string): boolean {
  return token !== undefined && token.match(/^[0-9]+$/) !== null;
}

export function isName(token: string): boolean {
  return token !== undefined && token.match(/^[A-Za-z]+$/) !== null;
}

type Obj =
  | {
      type: 'number';
      value: string;
    }
  | {
      type: 'name';
      id: string;
    }
  | {
      type: '+';
      left: Obj;
      right: Obj;
    }
  | {
      type: '-';
      left: Obj;
      right: Obj;
    }
  | {
      type: '*';
      left: Obj;
      right: Obj;
    }
  | {
      type: '/';
      left: Obj;
      right: Obj;
    };

export function parse(code: string): Obj {
  const tokens: string[] = tokenize(code);
  let position: number = 0;

  function peek(): string {
    return tokens[position];
  }

  function consume(): void {
    position = position + 1;
  }

  function parsePrimaryExpr(): Obj {
    const t = peek();

    if (isNumeric(t)) {
      consume();
      return {
        type: 'number',
        value: t,
      };
    } else if (isName(t)) {
      consume();
      return {
        type: 'name',
        id: t,
      };
    } else if (t === '(') {
      consume();
      const expr = parseExpr();
      if (peek() !== ')') {
        throw new SyntaxError('expected )');
      }
      consume();

      return expr;
    } else {
      throw new SyntaxError('Expected a number, a variable, or parentheses');
    }
  }

  function parseMulExpr(): Obj {
    let expr = parsePrimaryExpr();
    let t = peek();

    while (t === '*' || t === '/') {
      consume();
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

  function parseExpr(): Obj {
    let expr = parseMulExpr();
    let t = peek();

    while (t === '+' || t === '-') {
      consume();
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

export function evaluate(code: string): number {
  const variables = {
    e: Math.E,
    pi: Math.PI,
  };

  function evalu(obj: Obj): number {
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
