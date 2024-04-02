---
topic: Algorithms
title: Add Digits
chapter: Array
slug: array-add-digits
---

```python
class Solution(object):
    def addDigits2(self, num):
        """
        :type num: int
        :rtype: int
        """
        n = str(num)
        i = 0
        sum = 0
        while i < len(n):
            sum += int(n[i])
            i += 1
        if sum < 10:
            return sum
        else:
            return self.addDigits(sum)

    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        sum = 0
        while num:
            sum += num%10
            num = num//10
        if sum < 10:
            return sum
        else:
            return self.addDigits(sum)

    def addDigits3(self, num):
        while num > 9:
            sum = 0
            while num:
                sum += num%10
                num = num//10

            num = sum

        return num

```
