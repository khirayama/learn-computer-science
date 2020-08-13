import unittest

def add(a, b):
    return a + b

class Test(unittest.TestCase):
    def test_add_nums(self):
        self.assertEqual(4, add(1, 3))

if __name__ == "__main__":
    unittest.main()
