# 冒泡排序

## 思路

将前一个元素和后一个元素对比，如果前一个大，则调换两者位置。否则对比下一个元素

## 实现

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let complete = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        complete = false;
      }
    }
    if (complete) break;
  }
  return array;
}
```

如果在遍历的过程没有发生冒泡，则说明排序完成。complete 为 true 跳出循环
