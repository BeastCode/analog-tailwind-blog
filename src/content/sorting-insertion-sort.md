---
title: Insertion Sort
chapter: Sorting
slug: sorting-insertion-sort
---

```python
def insertion_sort(my_list): # Iterate through the list from the second element to the last element. For each element i, perform the following steps:
    for i in range(1, len(my_list)):
        print(my_list[i]) # Store the value of the element at position i in a temporary variable called temp.
        tmp = my_list[i] # Initialize another variable j to i - 1.
        j = i -1

        while tmp < my_list[j] and j >=0:
        # While temp is less than the element at position j and j is greater than or equal to 0, perform the following steps:

            # Move the element at position j to the position j + 1.
            my_list[j+1] = my_list[j]

            # Place the value of temp at position j.
            my_list[j] = tmp

            # Decrement j by 1.
            j -= 1
    return my_list

print(insertion_sort([4,2,6,5,1,3]))

"""
EXPECTED OUTPUT:
----------------
[1, 2, 3, 4, 5, 6]

"""
```
