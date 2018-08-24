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
runtest 'F[+ . .]F(1)' 2
runtest 'F[* . 2]F(5)' 10
runtest 'F[* . .]F(F(2))' 16
runtest 'F[* . .]F(F(F(2)))' 256

echo OK
