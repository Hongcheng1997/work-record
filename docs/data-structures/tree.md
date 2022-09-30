# 树

```js
let tree = [
  {
    id: '1',
    title: '节点1',
    children: [
      {
        id: '1-1',
        title: '节点1-1',
      },
      {
        id: '1-2',
        title: '节点1-2',
      },
    ],
  },
  {
    id: '2',
    title: '节点2',
    children: [
      {
        id: '2-1',
        title: '节点2-1',
      },
    ],
  },
];
```

## 深度优先遍历

```js
function deepTree(tree, arr = []) {
  tree.forEach((item) => {
    arr.push(item.id);
    item.children && deepTree(item.children, arr);
  });
  return arr;
}
console.log(deepTree(tree));
```

## 广度优先遍历

```js
function rangeTree(tree, arr = []) {
  let node,
    list = [...tree];
  while ((node = list.shift())) {
    arr.push(node.id);
    node.children && list.push(...node.children);
  }
  console.log(arr);
  return arr;
}
rangeTree(tree);
```

## 列表转树

```js
function listToTree(data) {
  let map = {};
  let treeData = [];

  data.forEach((item) => {
    map[item.id] = item;
  });

  for (key in map) {
    const item = map[key];
    if (map[item.parentId]) {
      if (!map[item.parentId].children) {
        map[item.parentId].children = [];
      }
      map[item.parentId].children.push(item);
    } else {
      treeData.push(item);
    }
  }

  return treeData;
}

let list = [
  { id: 1, title: 'child1', parentId: 0 },
  { id: 2, title: 'child2', parentId: 0 },
  { id: 6, title: 'child2_1', parentId: 2 },
  { id: 4, title: 'child1_1', parentId: 1 },
  { id: 5, title: 'child1_2', parentId: 1 },
  { id: 3, title: 'child3', parentId: 0 },
  { id: 7, title: 'child3_1', parentId: 3 },
  { id: 8, title: 'child3_1', parentId: 4 },
];

console.log(listToTree(list));
```
