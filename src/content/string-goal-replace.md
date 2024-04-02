---
topic: Algorithms
title: Goal Replace
chapter: String
slug: string-goal-replace
---

```python

def goalReplace(s: str) -> str:
    return s.replace('G', 'G').replace('()', 'o').replace('(al)', 'al')

def goalReplace2(s: str) -> str:
    dict = {'G': 'G', '()': 'o', '(al)': 'al'}
    tmp = ''
    result = ''
    for i in range(len(s)):
        tmp += s[i]
        if tmp in dict:
            result += dict[tmp]
            tmp = ''
        print(tmp, result)
    return result


# main
if __name__ == '__main__':
    input = "G()(al)"
    result = goalReplace(input)
    result2 = goalReplace2(input)
    print(input + ' ' + result + ' ' + result2)

    for i in range(len(s)):
        tmp += s[i]
        if tmp in dict:
            result = dict[tmp]


```
