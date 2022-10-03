# 栈

栈遵循先进后出原则

## 实现

```js
class Stack {
  constructor() {
    this.arr = [];
  }

  insert(data) {
    this.arr.push(data);
  }

  delete() {
    this.arr.pop();
  }

  toString() {
    return this.arr.toString();
  }
}

const list = new Stack();

list.insert(1);
list.insert(2);
list.insert(3);
console.log(list.toString());
list.delete();
console.log(list.toString());
```
