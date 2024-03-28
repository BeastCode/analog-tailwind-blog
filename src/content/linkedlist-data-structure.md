---
title: Data Structure
chapter: Linked List
slug: linkedlist-data-structure
---

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def print_list(self):
        node = self.head
        while node is not None:
            print(node.value)
            node = node.next

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            self.tail.next = new_node

        self.tail = new_node
        self.length +=1

    def pop(self):
        new_node = Node(1)

    def pop_try1(self):
        node = self.head
        if node.next is None:
            return Node(None)
        if node.next.next is None:
            poped = node.next;
            node.next = None
            self.head = None
        else:
            current = node.next
            while current.next is not None:

                poped = node.next;
                current = current.next

        self.length -=1;
        return poped;

    def pop(self):
        if self.head is None:
            return None

        if self.length == 1:
            tmp = self.head
            self.head = None
            self.tail = None
            self.length -=1
            return tmp

        pre = self.head
        tmp = self.head

        while(tmp.next):
            pre = tmp
            tmp = tmp.next

        self.tail = pre
        self.tail.next = None
        self.length -=1
        return tmp

    def pop_first(self):


        if node is None:
            return
        node = self.head

        if node.next is None:
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next

        node.next = None
        self.length -=1
        return node

    def pop_first2(self):
        if self.length == 0:
            return None
        tmp = self.head
        self.head = self.head.next
        tmp.next = Node

        self.length -=1
        if self.length == 0:
            self.tail = None
        return tmp



    def prepend(self):
        new_node = Node(2)

    def get(self, index):
        if index < 0 or index >= self.length:
            return
        node = self.head
        for _ in range(index):
            node = node.next
        return(node)

    def set_value(self, index, value):
        if index < 0 or index >= self.length:
            return
        node = self.head
        for i in range(index):
            node = node.next
        node.value = value

    def set_value2(self, index, value):
        temp = self.get(index)
        if temp:
            temp.value = value
            return True
        return False


    def insert(self, index, value):
        if index < 0 or index >= self.length:
            return

        self.length += 1
        new_node = Node(value)

        if self.length == 0:
            self.head = node
            self.tail = node
            return

        if index == 0:
            new_node.next = self.head
            self.head = new_node
            return

        node = self.head
        i = 0
        while node:
            if i== index-1:
                new_node.next = node.next
                node.next = new_node
                return
            i += 1
            node = node.next

    def reverse(self):
        if self.length < 3:
            return
        prev
        temp = self.node
        next
        while self.node:


            temp = self.node.next


    def clear(self):
        self.head = None
        self.tail = None
        self.length = 0



my_linked_list = LinkedList(4)
my_linked_list.append(1)
my_linked_list.append(3)
my_linked_list.append(6)
my_linked_list.print_list()
print('Get:', my_linked_list.get(0).value)
print('Get:', my_linked_list.get(1).value)
print('Get:', my_linked_list.get(2).value)
# my_linked_list.set_value(2,8)
my_linked_list.insert(0,7)
my_linked_list.insert(2,77)
my_linked_list.print_list()
print('pop first', my_linked_list.pop_first().value)
my_linked_list.print_list()

# print('Head:', my_linked_list.head.value)
# print('Tail:', my_linked_list.tail.value)
# print('Length:', my_linked_list.length)
# my_linked_list.append(5)
# print('Length:', my_linked_list.length)
# my_linked_list.print_list()
# my_linked_list.clear();
# print('Length:', my_linked_list.length)
# my_linked_list.print_list()
# my_linked_list.append(5)
# print('Length:', my_linked_list.length)
# my_linked_list.print_list()
```
