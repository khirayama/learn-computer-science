package main

import (
    "testing"
)

func TestAddSuccess(t *testing.T) {
    result := add(2, 3)
    if result != 5 {
        t.Fatal("failed test")
    }
}
