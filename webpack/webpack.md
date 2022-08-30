# webpack 相关记录

模块化

- es Module
  静态编译
  import 导入、export 导出

- commonJS
  动态编译
  export.module 导出、require 导入

## devtool

- 开发
- 生产

## loader

- url-loader
- babel-loader
- css-loader/style-loader
- ts-loader

## plugins

- WebpackBar
- HtmlWebpackPlugin
- EnvironmentPlugin
- MiniCssExtractPlugin
- HappyPack

## 自定义 plugin/loader

plugin

方法内必须要有 apply 方法，apply 内包含 complier 实例，可以拿到 webpack 各个生命周期，根据自己的需求使用具体的生命周期即可（Tapable）

## 常见优化方法

1、减小打包产物体积大小

使用 webpack-bundle-analyzer 查看打包后生成的 bundle 体积分析

- cdn
图片压缩 base64 （移动端工程会跑脚本把本地图片上传阿里云 oss 做 cdn 加速）

代码压缩
optimization.minimizer 中初始化 CssMinimizerPlugin、TerserWebpackPlugin

- js 压缩 TerserWebpackPlugin（生产模式会自动开启）
- css 压缩 optimization.minimizer 定义压缩插件(CssMinimizerPlugin)、
 按需加载

代码分离

- js 分离，SplitChunksPlugin 插件开箱即用，可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
- css 分离，MiniCssExtractPlugin 插件将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。

2、提高构建速度

speed-measure-webpack-plugin 插件进行构建速度分析，可以看到各个 loader、plugin 的构建时长，后续可针对耗时 loader、plugin 进行优化。

- thread-loader 开启多 cpu 打包
- 通过配置 webpack 持久化缓存 cache: filesystem，来缓存生成的 webpack 模块和 chunk，改善构建速度。
- 为 loader 指定 include，减少 loader 应用范围

<!-- - TerserPlugin 并行压缩
- splitChunks css 切割 -->

## 原理

通过 babylon 分析代码生成 ast 语法树，通过 babel-traverse 分析 ast 中的依赖关系，以及 babel-core 将 ast 解析
成 es5 代码，可以拿到所有的依赖关系及模块代码。最后通过函数自执行的方式执行所有代码
