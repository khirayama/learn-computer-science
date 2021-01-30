import math
import unittest

import main


class TestCalculator(unittest.TestCase):

    def test_Lexer(self):
        self.assertEqual(main.Lexer('123\n').tokens, ['123'])
        self.assertEqual(main.Lexer('2+2').tokens, ['2', '+', '2'])
        self.assertEqual(main.Lexer('+-*/').tokens, ['+', '-', '*', '/'])
        self.assertEqual(
                main.Lexer('   1   * 24 +\n\n  pi').tokens,
                ['1', '*', '24', '+', 'pi']
                )
        self.assertEqual(main.Lexer('()').tokens, ['(', ')'])
        self.assertEqual(main.Lexer('     ').tokens, [])

    def test_Parser(self):
        self.assertDictEqual(
            main.Parser(main.Lexer('(1 + 2) / 3').tokens).ast,
            {
                'type': '/',
                'left': {
                    'type': '+',
                    'left': {
                        'type': 'number',
                        'value': '1'
                    },
                    'right': {
                        'type': 'number',
                        'value': '2'
                    },
                },
                'right': {
                    'type': 'number',
                    'value': '3'
                },
            }
        )

    def test_evaluate(self):
        self.assertEqual(
            main.evaluate({
                'type': '/',
                'left': {
                    'type': '+',
                    'left': {
                        'type': 'number',
                        'value': '1'
                    },
                    'right': {
                        'type': 'number',
                        'value': '2'
                    },
                },
                'right': {
                    'type': 'number',
                    'value': '3'
                },
            }), 1)

    def test_calculate(self):
        self.assertEqual(main.calculate('2 + 2'), 4)
        self.assertEqual(main.calculate('3 * 4 * 5'), 60)
        self.assertEqual(main.calculate('5 * (2 + 2)'), 20)
        self.assertEqual(main.calculate('1 + 1 / 2'), 1.5)
        self.assertEqual(main.calculate('pi * 2'), math.pi * 2)


if __name__ == '__main__':
    unittest.main()
