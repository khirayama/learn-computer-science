const assert = require('assert');

const { tokenize, isNumeric, isName, parse, evaluate } = require('./index');

describe('tokenize', () => {
  it('work correctly', () => {
    assert.deepStrictEqual(tokenize('123\n'), ['123']);
    assert.deepStrictEqual(tokenize('2+2'), ['2', '+', '2']);
    assert.deepStrictEqual(tokenize('+-*/'), ['+', '-', '*', '/']);
    assert.deepStrictEqual(tokenize('   1   * 24 +\n\n  pi'), ['1', '*', '24', '+', 'pi']);
    assert.deepStrictEqual(tokenize('()'), ['(', ')']);
    assert.deepStrictEqual(tokenize('    '), []);
  });
});

describe('isNumeric', () => {
  it('work correctly', () => {
    assert(isNumeric('123'));
    assert(!isNumeric('x'));
    assert(!isNumeric('-'));
  });
});

describe('isName', () => {
  it('work correctly', () => {
    assert(isName('xyz'));
    assert(!isName('+'));
  });
});

describe('parse', () => {
  it('work correctly', () => {
    assert.deepStrictEqual(parse('(1 + 2) / 3'), {
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
    assert.strictEqual(evaluate('2 + 2'), 4);
    assert.strictEqual(evaluate('3 * 4 * 5'), 60);
    assert.strictEqual(evaluate('5 * (2 + 2)'), 20);
    assert.strictEqual(evaluate('1 + 1 / 2'), 1.5);
    assert.strictEqual(evaluate('pi * 2'), Math.PI * 2);
  });
});
