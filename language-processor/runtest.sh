#!/bin/bash
gcc -std=c11 -o lang lang.c

runtest() {
  output=$(./lang "$1")
  if [ "$output" != "$2" ]; then
    echo "$1: $2 expected, but got $output"
    exit 1
  fi
  echo "$1 => $output"
}

runtest 0 0
runtest 1 1
runtest 99 99
runtest '1 2 3' '1
2
3'

echo '=== arithmetic operators ==='
runtest '+ 1 2' 3
runtest '+ 100 5' 105
runtest '- 5 1' 4
runtest '- 1 4' -3
runtest '+ + + 1 2 3 4' 10
runtest '+ 1 + 2 + 3 4' 10
runtest '+ 2 *4 3' 14

echo '=== functions ==='
runtest 'F[+ a a]F(1)' 2
runtest 'F[* a 2]F(5)' 10
runtest 'F[* a a]F(F(2))' 16
runtest 'F[* a a]F(F(F(2)))' 256
runtest 'F[* a a] F(F(F(2)))' 256
runtest 'F[* a a] F(F(F(F(2))))' 65536
runtest 'F[* a 3] F(F(F(F(2))))' 162
runtest 'F[+ a 3] F(F(F(F(2))))' 14
runtest 'F[+ a 3] F(0)' 3
runtest 'F[- a 5] G[F(a)] G(0)' -5
runtest 'F[- a 5] G[F(+ a 5)] G(0)' 0
runtest 'F[- a 5] G[F(+ a 10)] G(0)' 5
runtest 'F(* a b) F(3 5)' 15

echo OK
