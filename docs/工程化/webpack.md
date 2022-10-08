# Webpack

webpack 可以看作模块打包器，任何模块可以通过相关 loader 转译成可识别的形式打包输出，同时内部实现了一个模块系统，可以将常见的 esm 语法编译成其他的语法，如：umd、commonJs 等

## 常用 loader

- babel-loader
- css-loader、style-loader
- ts-loader

## 常用 plugins

- HtmlWebpackPlugin
- EnvironmentPlugin
- MiniCssExtractPlugin
- HappyPack

## loader 和 plugin 的区别

- loader 功能是对文件内容做编译，使 webpack 具备识别的不同文件格式
- plugin 可以扩展 webpack 的功能，由于 webpack 继承了 Tapable 的事件流，在各个阶段都有相应的生命周期函数，可以在函数中做自定义操作

## 自定义 plugin/loader

- plugin

方法内必须要有 apply 方法，apply 内包含 complier 实例，可以拿到 webpack 各个生命周期，根据自己的需求使用具体的生命周期即可（Tapable）

- loader

自定义 loader 通过 module.exports 导出一个函数，函数内可以获取的源代码，对源代码做处理后 return 返回编译后的代码。

常用方法：

1. this.getOptions 获取 loader 相关参数
2. this.async 获取回调可以在 loader 内部做相关异步操作
3. this.callback 同步回调，功能和函数内 return 作用一样

## Webpack 的热更新原理

webpack-dev-server 与浏览器之间维护一个 websocket，当本地资源发生变化时，webpack-dev-server 会想浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比，如有差异就会向 webpack-dev-server 发起请求获取更高内容（文件列表，hash）这样客户端就可以再借助这些信息想 webpack-dev-server 发起 jsonp 请求获取 chunk 的增量更新，拿到增量更新后，由 HotModulePlugin 这个插件处理

## 常见优化方法

优化主要两方面入手，减小打包产物体积大小和提高构建速度。

### 减小打包产物体积大小

使用 webpack-bundle-analyzer 查看打包后生成的 bundle 体积分析

- 代码压缩
  optimization.minimizer 中初始化 CssMinimizerPlugin、TerserWebpackPlugin

  - js 通过 TerserWebpackPlugin（生产模式会自动开启）
  - css 通过 optimization.minimizer 配置压缩插件 CssMinimizerPlugin

- 公共代码提取

  - js 通过 SplitChunksPlugin 插件开箱即用，可以将公共的模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
  - css 通过 MiniCssExtractPlugin 插件将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。

- Tree-Shaking

  - Webpack5 自动集成 js 代码剔除
  - css 通过配置 PurgeCSSPlugin 插件实现代码剔除

- 图片压缩 base64

### 提高构建速度

speed-measure-webpack-plugin 插件进行构建速度分析，可以看到各个 loader、plugin 的构建时长，后续可针对耗时 loader、plugin 进行优化。

- thread-loader 开启多 cpu 打包
- 通过配置 webpack 持久化缓存 cache: filesystem，来缓存生成的 webpack 模块和 chunk，改善构建速度。
- 为 loader 指定 include，减少 loader 应用范围

## Webpack 构建流程

1. 初始化参数：从配置文件和 shell 语句中读取与合并参数，得出最终的参数
2. 开始编译：用上一步的到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
3. 确定入口：根据配置中的 entry 找到所有入口文件
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
5. 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及依赖关系
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 chunk 再把这个 chunk 转换成一个单独的文件加入到输出列表
7. 输出完成：确定输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

## Webpack 构建原理

通过 babylon 分析代码生成 ast 语法树，通过 babel-traverse 分析 ast 中的依赖关系，以及 babel-core 将 ast 解析成 es5 代码，可以拿到所有的依赖关系及模块代码。最后通过函数自执行的方式执行所有代码
