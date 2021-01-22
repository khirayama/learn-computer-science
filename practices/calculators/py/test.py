import unittest

import main


class TestCalculator(unittest.TestCase):

    def test_tokenize(self):
        self.assertEqual(main.tokenize('123\n'), ['123'])
        self.assertEqual(main.tokenize('2+2'), ['2', '+', '2'])
        self.assertEqual(main.tokenize('+-*/'), ['+', '-', '*', '/'])
        self.assertEqual(
                main.tokenize('   1   * 24 +\n\n  pi'),
                ['1', '*', '24', '+', 'pi']
                )
        self.assertEqual(main.tokenize('()'), ['(', ')'])
        self.assertEqual(main.tokenize('     '), [])

    def test_is_numeric(self):
        self.assertTrue(main.is_numeric('123'))
        self.assertFalse(main.is_numeric('x'))
        self.assertFalse(main.is_numeric('-'))

    def test_is_name(self):
        self.assertTrue(main.is_name('xyz'))
        self.assertFalse(main.is_name('+'))


if __name__ == '__main__':
    unittest.main()
