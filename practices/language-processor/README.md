```
$ gcc -std=c11 -o lang lang.c && ./lang 'a'
$ gcc -std=c11 -o lang lang.c && ./lang 'F[P(a) F(b + a b)] F(1 1)' | head -15
$ gcc -std=c11 -o lang lang.c && ./lang 'F[P(a) F(* a a)] F(1)' | head -15
$ gcc -std=c11 -o lang lang.c && ./lang 'F[P(a) F(* a a)] F(2)' | head -15
$ gcc -std=c11 -o lang lang.c && ./lang 'F[P(a) F(* a 2)] F(2)' | head -15
$ gcc -std=c11 -o lang lang.c && ./lang 'F[P(a) F(* a  + 2 a)] F(2)' | head -15
```
