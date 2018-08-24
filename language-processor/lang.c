#include <stdio.h>
#include <ctype.h>
#include <stdarg.h>
#include <stdlib.h>
#include <string.h>

static char *p;
static func[26][100];

__attribute__((noreturn)) static void error(char *fmt, ...) {
  va_list ap;
  va_start(ap, fmt);
  vfprintf(stderr, fmt, ap);
  fprintf(stderr, "\n");
  exit(1);
}

static void skip() {
  while (isspace(*p))
    p++;
}

// 入力を読んで、入力を返す
static int eval() {
  skip();

  // Function parameter
  if (*p == '.') {
    p++;
    return arg;
  }

  // Function definition
  if ('A' <= *p && *p <= 'Z' && p[1] == '[') {
    p += 2;
  }


  // Literal numbers
  if (isdigit(*p)) {
    int val = *p++ - '0';
    while (isdigit(*p))
      val = val * 10 + (*p++ - '0');
    return val;
  }

  // Arithmetic operators
  if (strchr("+-*/", *p)) {
    int op = *p++;
    int x = eval();
    int y = eval();

    switch (op) {
      case '+': return x + y;
      case '-': return x - y;
      case '*': return x * y;
      case '/': return x / y;
    }
  }

  error("invalid character: %c", *p);
}

int main(int argc, char **argv) {
  p = argv[1];
  while (*p)
    printf("%d\n", eval());

  return 0;
}
