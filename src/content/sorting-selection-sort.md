---
topic: Algorithms
title: Selection Sort
chapter: Sorting
slug: sorting-selection-sort
---

```python

def selection_sort(my_list):
    if len(my_list) == 0:
        return my_list

    # Iterate through the list from the first element to the second-to-last element. For each element i, perform the following steps:
    for i in range(len(my_list)-1):
        min_index = i
        # Iterate through the list from the element at position i + 1 to the last element. For each element j, perform the following steps:
        for j in range(i+1, len(my_list)):
            # print(i, j+1)
            # Compare the element at position j with the element at position min_index. If the element at position j is less than the element at position min_index, update min_index to the index j.
            if my_list[j] < my_list[min_index]:
                min_index = j

        # If the index i is not equal to min_index, swap the elements at positions i and min_index.
        if i != min_index:
            tmp = my_list[i]
            my_list[i] = my_list[min_index]
            my_list[min_index] = tmp





    return my_list;




print(selection_sort([4,2,6,5,1,3]))



"""
    EXPECTED OUTPUT:
    ----------------
    [1, 2, 3, 4, 5, 6]

 """
```
