---
topic: Algorithms
title: Big O
chapter: Runtime Analysis
slug: runtime-analysis-big-o
---

Time Complexity

Space Complexity

Big talking about worst case, not average

O(n)
for i in n:

### Simplify O(2n)

Example:
for i in n:
for j in n:
O(2n) -> = O(n)

## O(n^2)

Loop in a loop

Example:
for i in n:
for j in n:

## O(n^2) + O(n)

Example: Drop non dominants
O(n^2 + n) = O(n^2)

## O(1)

Constant time

O(2) -> O(1)

## O(log n)

Guessing game, half, half, divide and concure
2^3 = 8
log2 8 = 3

## O(nlog n)

Most efficiant sort algoritms, quicksort, merge sort

## O(a+b) = o(a+b), O(a\*b), ....

# Study

https://www.bigocheatsheet.com/

Constant: O(1)
Linear time: O(n)
Logarithmic time: O(n log n)
Quadratic time: O(n^2)
Exponential time: O(2^n)
Factorial time: O(n!)
