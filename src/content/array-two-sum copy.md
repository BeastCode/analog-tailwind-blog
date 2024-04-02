---
topic: Algorithms
title: Two Sum
chapter: Array
slug: array-two-sum
---

```python
def TS_old(nums, target):
    for i in range(len(nums)-1):
        # print(len(nums)-1, i)
        num = nums[i]
        print(num)
        # # j = target - num in nums
        # print([i, nums.index(target-num)])
        if nums.index(target-num, i+1):
             return [i,nums.index(target-num)]
    return []

def TS_new(nums, target):
    for i, value in enumerate(nums):
        rest = target - value
        # print(i, value, rest)
        # print('if', nums.index(rest, i+1))
        if nums.index(rest, i+1):
            # print('if', i, nums.index(rest, i+1))
            return [i, nums.index(rest, i+1)]
    return []

def TS(nums, target):
    d = {}
    for i, value in enumerate(nums):
        rest = target - value
        if rest in d:
            return [d[rest], i]
        else:
            d[value] = i
    return []

#    Runtime 99.22% Memory 83.83%

def twoSum(self, n, t):
        d = {}
        for e in enumerate(n):
            r = t - e[1]
            if r in d:
                return [d[r], e[0]]
            else:
                d[e[1]] = e[0]
        return []


if __name__ == '__main__':

    # result = TS([2,7,11,15], 9)
    # print('Result',  TS([1,2,3,4,5], 7))
    print('Test',  [2,7,11,15], 9)
    print('Result',  TS([1,2,7,11,15], 9))
    print('Test',  [3,2,4], 6)
    print('Result',  TS([3,2,4], 6))
    print('Test',  [3,3], 6)
    print('Result',  TS([1,3,3], 6))


```
