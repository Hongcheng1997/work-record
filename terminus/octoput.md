基本架构

cli
- plugin(template\asset)

core
- reconciler
- route

adapter
- wx component

route

**cli**
cli 主要负责分析代码编译出小程序识别的文件和目录结构。通常入口为 mp_app.tsx，每个 route 都对应小程序的一个页面，而每个页面都需要模版文件(.wxml)、css 文件(.wxss)、脚本文件(.js)。
因此 webpack 构建需要采用多入口方式。这边采用自定义 plugin 的方式，通过 babel.transform 可以分析代码结构输出 ast 语法树，从而可以拿到每个 route 对应的 attr、component 并写入
全局的状态管理中。
至此 webpack 开始构建，由于是动态的多入口打包，所以采用 VirtualModulesPlugin 对每个页面创建虚拟入口。同时对每个页面级组件包裹一层小程序 api Page(generatePageConfig(page))、以及根组件(App(generateAppConfig(App)))
generatePageConfig、generateAppConfig 均返回小程序的熟悉和相关生命周期如: data、onLoad、onLaunch 等

**core**
开源社区的跨端框架大致分为下面两类：
- compile time 编译时
- runtime 运行时
compile time 主要工作重点在编译时。在编译打包的过程中，利用 babel 工具通过 AST 进行转译，生成符合小程序规则的代码。由于 react 写法较于灵活，这种方式做的适配场景过多，并且有写法限制，所以并不理想
另一种 runtime 运行时主要利用 react 自定义渲染器（可以去了解 React Conf 2019 Building a Custom React Renderer）实现不同平台上的渲染，可以使用 react 所有的 feat，没有写法上的限制

rerender 可以通过 hostconfig 和 reconciler 调度器做链接，只要填充了对应 dom 渲染的 api，react 在 commit 阶段就会构建出一棵完整的 dom 树。





