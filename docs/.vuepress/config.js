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
    ],
  },
};
