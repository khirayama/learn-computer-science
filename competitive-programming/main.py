- 入力値処理
- 出力処理
- よく使うメソッド

## 入力値処理

""" 文字列
abc
> a = "abc"
"""
a = input()

""" 1行複数文字列
abc def
> a = ["abc", "def"]
"""
a = input().split()

""" 複数行文字列
a
b
c
d
> a = ["a", "b", "c", "d"]
"""
a = [input() for i in range(n)]

""" 複数行複数文字列
...
#..
..#
> [[".", ".", "."], ["#", ".", "."], [".", ".", "."]]
"""
[list(input()) for i in range(n)]


## 出力処理

print("a", "b", "c") # a b c
print("a", "b", "c", sep="") # abc
a = [1, 2, 3]
print(*a) # 1 2 3
print(*a, sep="") #123
print('%s is %s' % (a, b))


## よく使うメソッド

- abs()
- map()
- sorted(arr)
- max
  - max(dic, key = dic.get)
- min
- str.lower()
- str.upper()
- str.split()
- str.splitlines()
