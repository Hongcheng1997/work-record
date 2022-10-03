# 队列

队列遵循先进先出的原则

## 实现

```js
class Queue {
  constructor() {
    this.arr = [];
  }

  insert(data) {
    this.arr.push(data);
  }

  delete() {
    this.arr.shift();
  }

  toString() {
    return this.arr.toString();
  }
}

const list = new Queue();

list.insert(1);
list.insert(2);
list.insert(3);
console.log(list.toString());
list.delete();
console.log(list.toString());
```
