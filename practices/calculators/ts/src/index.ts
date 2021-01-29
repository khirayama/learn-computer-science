type Token = string;

type AstNode =
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
      left: AstNode;
      right: AstNode;
    }
  | {
      type: '-';
      left: AstNode;
      right: AstNode;
    }
  | {
      type: '*';
      left: AstNode;
      right: AstNode;
    }
  | {
      type: '/';
      left: AstNode;
      right: AstNode;
    };

const variables = {
  e: Math.E,
  pi: Math.PI,
};

export class Lexer {
  private input: string;

  public tokens: Token[];

  constructor(input: string) {
    this.input = input;
    this.tokens = this.tokenize(this.input);
  }

  public tokenize(input: string): Token[] {
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

export class Parser {
  private position: number = 0;

  private tokens: Token[];

  public ast: AstNode;

  constructor(tokens: Token[]) {
    this.tokens = tokens;

    this.ast = this.parseExpr();

    if (this.position !== this.tokens.length) {
      throw new SyntaxError("Unexpected '" + this.peek() + "'");
    }
  }

  private isNumeric(token: Token): boolean {
    return token !== undefined && token.match(/^[0-9]+$/) !== null;
  }

  private isName(token: Token): boolean {
    return token !== undefined && token.match(/^[A-Za-z]+$/) !== null;
  }

  private peek(): Token {
    return this.tokens[this.position];
  }

  private consume() {
    this.position += 1;
  }

  private parsePrimaryExpr(): AstNode {
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

  private parseMulExpr(): AstNode {
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

  private parseExpr(): AstNode {
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

export function evaluate(node: AstNode): number {
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
}

export function calculate(input: string) {
  const l = new Lexer(input);
  const p = new Parser(l.tokens);
  return evaluate(p.ast);
}
