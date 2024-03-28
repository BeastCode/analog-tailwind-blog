---
title: Bubbel Sort
chapter: Sorting
slug: sorting-bubble-sort
---

## Input and Expected Result

Input
[2][4][3][5][1]

Expected output
[1][2][3][4][5]

## Bubbel Down

```python
def bubble_sort(arr):
    for i in range(len(arr)-1, 0, -1):
        for j in range(0,i):
            if arr[j+1] < ar[j]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
```

## Bubbel Up with Short-circuiting

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False  # Flag to check if any swaps occur in this pass
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap elements using tuple unpacking
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True  # Set flag to True if a swap occurs
        # If no two elements were swapped by the inner loop, then the array is already sorted
        # and we can break out of the outer loop
        if not swapped:
            break
    return arr


print(bubble_sort([2,4,3,5,1]))

"""

Result:
[1, 2, 3, 4, 5]

"""
```
