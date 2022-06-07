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

## 常见优化方法

1、减小打包产物体积大小

- 图片压缩 base64 （移动端工程会跑脚本把本地图片上传阿里云 oss 做 cdn 加速）
- js 压缩 TerserWebpackPlugin
- optimization.minimizer 定义压缩插件(MiniCssExtractPlugin)、SplitChunksPlugin 按需加载

2、提高构建速度

- HappyPack 开启多 cpu 打包
- cache-loader
- dll 优先打包 node_modules 中需要的依赖
- SpeedMeasurePlugin

<!-- - TerserPlugin 并行压缩
- splitChunks css 切割 -->

## 原理

通过 babylon 分析代码生成 ast 语法树，通过 babel-traverse 分析 ast 中的依赖关系，以及 babel-core 将 ast 解析
成 es5 代码，可以拿到所有的依赖关系及模块代码。最后通过函数自执行的方式执行所有代码
