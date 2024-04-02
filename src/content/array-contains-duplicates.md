---
topic: Algorithms
title: Contains Duplicates
chapter: Array
slug: array-contains-duplicates
---

```python
def containsDuplicate_len(nums):
    return len(nums) != len(set(nums))

def containsDuplicate_for(nums):
    d = {}
    for n in nums:
        if n in d:
            return True
        else:
            d[n] = 1
    return False

def containsDuplicate_sorted(nums):
    nums.sort()
    for i in range(len(nums)-1):
        if nums[i] == nums[i+1]:
            return True
    return False

def containsDuplicate_hashmap(nums):
    d = {}
    for n in nums:
        if n in d:
            return True
        else:
            d[n] = 1
    return False

# main
if __name__ == '__main__':
    input = [1,2,3,1]
    print(containsDuplicate_len(input))
    print(containsDuplicate_for(input))
    print(containsDuplicate_sorted(input))
    print(containsDuplicate_hashmap(input))
    input = [1,2,3,4]
    print(containsDuplicate_len(input))
    print(containsDuplicate_for(input))
    print(containsDuplicate_sorted(input))
    print(containsDuplicate_hashmap(input))
    input = [1,1,1,3,3,4,3,2,4,2]
    print(containsDuplicate_len(input))
    print(containsDuplicate_for(input))
    print(containsDuplicate_sorted(input))
    print(containsDuplicate_hashmap(input))
    input = [1,2,3,4,5,6,7,8,9,10]
    print(containsDuplicate_len(input))
    print(containsDuplicate_for(input))
    print(containsDuplicate_sorted(input))
    print(containsDuplicate_hashmap(input))
    input = [1,2,3,4,5,6,7,8,9,10,10]
    print(containsDuplicate_len(input))
    print(containsDuplicate_for(input))
    print(containsDuplicate_sorted(input))
    print(containsDuplicate_hashmap(input))
    input = [1,2,3,4,5,6,7,8,9,10,10,10]
    print(containsDuplicate_len(input))
    print(containsDuplicate_for(input))
    print(containsDuplicate_sorted(input))
    print(containsDuplicate_hashmap(input))
    input = [1,2,3,4,5,6,7,8,9,10,10,10,10]
    print(containsDuplicate_len(input))
    print(containsDuplicate_for(input))
    print(containsDuplicate_sorted(input))
    print(containsDuplicate_hashmap(input))
    input = [1,2,3,4,5,6,7,8,9,10,10,10,10,10]
    print(containsDuplicate_len(input))
    print(containsDuplicate_for(input))
    print(containsDuplicate_sorted(input))
    print(containsDuplicate_hashmap(input))
    input = [1,2,3,4,5,6,7,8,9,10,10,10,10,10,10]
    # print(containsDuplicate_len
```
