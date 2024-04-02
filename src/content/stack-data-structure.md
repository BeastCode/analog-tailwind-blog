---
topic: Algorithms
title: Data Structure
chapter: Stack
slug: stack-data-structure
---

```python

class Node:
    def __init__(self, value):
        # Each Node contains a value and a reference to the next node in the stack
        self.data = value
        self.next_node = None

class Stack:
    def __init__(self, initial_value) -> None:
        # Initialize a stack with a starting value, setting the top node
        self.size = 0
        self.top = Node(initial_value)

    def push(self, value):
        # Add a new node to the top of the stack
        new_node = Node(value)
        new_node.next_node = self.top
        self.top = new_node
        self.size += 1

    def pop(self):
        # Remove and return the top node from the stack
        if self.size == 0:
            return None
        popped_node = self.top
        self.top = popped_node.next_node
        popped_node.next_node = None
        self.size -= 1
        return popped_node

    def print_stack(self):
        # Print the values of nodes in the stack from top to bottom
        current_node = self.top
        while current_node:
            print(current_node.data)
            current_node = current_node.next_node


    def peek(self):
        # Return the value of the top element without removing it.
        if self.size == 0:
            return None
        return self.head.value
```
