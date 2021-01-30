import unittest

import main


class TestCalculator(unittest.TestCase):

    def test_lexer(self):
        self.assertEqual(main.Lexer('123\n').tokens, ['123'])
        self.assertEqual(main.Lexer('2+2').tokens, ['2', '+', '2'])
        self.assertEqual(main.Lexer('+-*/').tokens, ['+', '-', '*', '/'])
        self.assertEqual(
                main.Lexer('   1   * 24 +\n\n  pi').tokens,
                ['1', '*', '24', '+', 'pi']
                )
        self.assertEqual(main.Lexer('()').tokens, ['(', ')'])
        self.assertEqual(main.Lexer('     ').tokens, [])

    # def test_is_numeric(self):
    #     self.assertTrue(main.is_numeric('123'))
    #     self.assertFalse(main.is_numeric('x'))
    #     self.assertFalse(main.is_numeric('-'))
    #
    # def test_is_name(self):
    #     self.assertTrue(main.is_name('xyz'))
    #     self.assertFalse(main.is_name('+'))
    #
    # def test_parse(self):
    #     self.assertFalse(main.parse('(1 + 2) / 3'), {
    #         'type': '/',
    #         'left': {
    #             'type': '+',
    #             'left': {
    #                 'type': 'number',
    #                 'value': '1'
    #             },
    #             'right': {
    #                 'type': 'number',
    #                 'value': '2'
    #             },
    #         },
    #         'right': {
    #             'type': 'number',
    #             'value': '3'
    #         },
    #     })


if __name__ == '__main__':
    unittest.main()
