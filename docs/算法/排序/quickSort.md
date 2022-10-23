# 快排

思路:

1. 将数组的第一个元素作为基准值，预置两个数组
2. 遍历数组，将每个元素和基准值比对，比基准值小的放左边，比数组大的放右边
3. 递归调用函数，分别对左右两个数组做排序

## 写法一

写法简单，但会浪费大量空间

```js
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const target = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > target) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  return [...quickSort(left), target, ...quickSort(right)];
}

console.log(quickSort([3, 4, 2, 1, 5, 8, 7]));
```

## 写法二

不会占用额外空间，但思路比较复杂。数据量过大也会超出最大调用栈

```js
function quickSort(array) {
  function recursion(array, start = 0, end = array.length - 1) {
    if (end - start < 1) {
      return;
    }
    const target = array[start];
    let l = start;
    let r = end;
    while (l < r) {
      while (l < r && array[r] >= target) {
        r--;
      }
      array[l] = array[r];
      while (l < r && array[l] < target) {
        l++;
      }
      array[r] = array[l];
    }
    array[l] = target;
    recursion(array, start, l - 1);
    recursion(array, l + 1, end);
    return array;
  }
  return recursion(array);
}

console.log(quickSort([3, 4, 2, 1, 5, 8, 7]));
```
