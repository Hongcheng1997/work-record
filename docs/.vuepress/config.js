module.exports = {
  title: '个人学习博客',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '前端基础',
        children: [
          // {
          //   title: '基础相关',
          //   path: '前端基础/前端基础.md',
          // },
          {
            title: '模块化发展历程',
            path: '前端基础/模块化.md',
          },
        ],
      },
      {
        title: '网络协议',
        children: [
          {
            title: 'Http 协议',
            path: 'network/http.md',
          },
          {
            title: 'Https 协议',
            path: 'network/https.md',
          },
          {
            title: 'TCP 协议',
            path: 'network/tcp.md',
          },
        ],
      },
      {
        title: '数据结构与算法',
        children: [
          {
            title: '栈',
            path: 'data-structures/stack.md',
          },
          {
            title: '队列',
            path: 'data-structures/queue.md',
          },
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
      {
        title: '浏览器相关',
        children: [
          {
            title: '浏览器缓存',
            path: 'browser/cache.md',
          },
        ],
      },
      {
        title: '项目工程化',
        children: [
          {
            title: '关于构建工具的一些思考',
            path: '工程化/打包构建的思考.md',
          },
          {
            title: 'webpack 相关',
            path: '工程化/webpack.md',
          },
        ],
      },
    ],
  },
  base: '/work-record/',
};
