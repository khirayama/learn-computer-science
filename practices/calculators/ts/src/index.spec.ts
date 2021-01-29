import assert from 'assert';

import { Lexer, Parser, evaluate, calculate } from './index';

describe('Lexer', () => {
  it('work correctly', () => {
    assert.deepStrictEqual(new Lexer('123\n').tokens, ['123']);
    assert.deepStrictEqual(new Lexer('2+2').tokens, ['2', '+', '2']);
    assert.deepStrictEqual(new Lexer('+-*/').tokens, ['+', '-', '*', '/']);
    assert.deepStrictEqual(new Lexer('   1   * 24 +\n\n  pi').tokens, ['1', '*', '24', '+', 'pi']);
    assert.deepStrictEqual(new Lexer('()').tokens, ['(', ')']);
    assert.deepStrictEqual(new Lexer('    ').tokens, []);
  });
});

describe('Parser', () => {
  it('work correctly', () => {
    assert.deepStrictEqual(new Parser(new Lexer('(1 + 2) / 3').tokens).ast, {
      type: '/',
      left: {
        type: '+',
        left: { type: 'number', value: '1' },
        right: { type: 'number', value: '2' },
      },
      right: { type: 'number', value: '3' },
    });
  });
});

describe('evaluate', () => {
  it('work correctly', () => {
    assert.deepStrictEqual(
      evaluate({
        type: '/',
        left: {
          type: '+',
          left: { type: 'number', value: '1' },
          right: { type: 'number', value: '2' },
        },
        right: { type: 'number', value: '3' },
      }),
      1,
    );
  });
});

describe('calculate', () => {
  it('work correctly', () => {
    assert.strictEqual(calculate('2 + 2'), 4);
    assert.strictEqual(calculate('3 * 4 * 5'), 60);
    assert.strictEqual(calculate('5 * (2 + 2)'), 20);
    assert.strictEqual(calculate('1 + 1 / 2'), 1.5);
    assert.strictEqual(calculate('pi * 2'), Math.PI * 2);
  });
});
