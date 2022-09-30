module.exports = {
  title: '个人学习博客',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '网络协议',
        children: [
          {
            title: 'Http 协议',
            path: 'network/Http.md',
          },
          {
            title: 'Https 协议',
            path: 'network/Https.md',
          },
          {
            title: 'TCP 协议',
            path: 'network/Tcp.md',
          },
        ],
      },
      {
        title: '数据结构与算法',
        children: [
          {
            title: '树',
            path: 'data-structures/tree.md',
          },
          {
            title: '二叉树',
            path: 'data-structures/binary-tree.md',
          },
        ],
      },
    ],
  },
  base: '/work-record/',
};
