(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{289:function(a,e,l){"use strict";l.r(e);var i=l(13),v=Object(i.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-相关记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-相关记录"}},[a._v("#")]),a._v(" webpack 相关记录")]),a._v(" "),e("p",[a._v("模块化")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("es Module\n静态编译\nimport 导入、export 导出")])]),a._v(" "),e("li",[e("p",[a._v("commonJS\n动态编译\nexport.module 导出、require 导入")])])]),a._v(" "),e("h2",{attrs:{id:"devtool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#devtool"}},[a._v("#")]),a._v(" devtool")]),a._v(" "),e("ul",[e("li",[a._v("开发")]),a._v(" "),e("li",[a._v("生产")])]),a._v(" "),e("h2",{attrs:{id:"loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[a._v("#")]),a._v(" loader")]),a._v(" "),e("ul",[e("li",[a._v("url-loader")]),a._v(" "),e("li",[a._v("babel-loader")]),a._v(" "),e("li",[a._v("css-loader/style-loader")]),a._v(" "),e("li",[a._v("ts-loader")])]),a._v(" "),e("h2",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[a._v("#")]),a._v(" plugins")]),a._v(" "),e("ul",[e("li",[a._v("WebpackBar")]),a._v(" "),e("li",[a._v("HtmlWebpackPlugin")]),a._v(" "),e("li",[a._v("EnvironmentPlugin")]),a._v(" "),e("li",[a._v("MiniCssExtractPlugin")]),a._v(" "),e("li",[a._v("HappyPack")])]),a._v(" "),e("h2",{attrs:{id:"自定义-plugin-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义-plugin-loader"}},[a._v("#")]),a._v(" 自定义 plugin/loader")]),a._v(" "),e("p",[a._v("plugin")]),a._v(" "),e("p",[a._v("方法内必须要有 apply 方法，apply 内包含 complier 实例，可以拿到 webpack 各个生命周期，根据自己的需求使用具体的生命周期即可（Tapable）")]),a._v(" "),e("h2",{attrs:{id:"常见优化方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见优化方法"}},[a._v("#")]),a._v(" 常见优化方法")]),a._v(" "),e("p",[a._v("1、减小打包产物体积大小")]),a._v(" "),e("p",[a._v("使用 webpack-bundle-analyzer 查看打包后生成的 bundle 体积分析")]),a._v(" "),e("ul",[e("li",[a._v("cdn\n图片压缩 base64 （移动端工程会跑脚本把本地图片上传阿里云 oss 做 cdn 加速）")])]),a._v(" "),e("p",[a._v("代码压缩\noptimization.minimizer 中初始化 CssMinimizerPlugin、TerserWebpackPlugin")]),a._v(" "),e("ul",[e("li",[a._v("js 压缩 TerserWebpackPlugin（生产模式会自动开启）")]),a._v(" "),e("li",[a._v("css 压缩 optimization.minimizer 定义压缩插件(CssMinimizerPlugin)、\n按需加载")])]),a._v(" "),e("p",[a._v("代码分离")]),a._v(" "),e("ul",[e("li",[a._v("js 分离，SplitChunksPlugin 插件开箱即用，可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。")]),a._v(" "),e("li",[a._v("css 分离，MiniCssExtractPlugin 插件将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。")])]),a._v(" "),e("p",[a._v("tree-Shaking")]),a._v(" "),e("ul",[e("li",[a._v("js webpack5 自带")]),a._v(" "),e("li",[a._v("css PurgeCSSPlugin")])]),a._v(" "),e("p",[a._v("2、提高构建速度")]),a._v(" "),e("p",[a._v("speed-measure-webpack-plugin 插件进行构建速度分析，可以看到各个 loader、plugin 的构建时长，后续可针对耗时 loader、plugin 进行优化。")]),a._v(" "),e("ul",[e("li",[a._v("thread-loader 开启多 cpu 打包")]),a._v(" "),e("li",[a._v("通过配置 webpack 持久化缓存 cache: filesystem，来缓存生成的 webpack 模块和 chunk，改善构建速度。")]),a._v(" "),e("li",[a._v("为 loader 指定 include，减少 loader 应用范围")])]),a._v(" "),e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[a._v("#")]),a._v(" 原理")]),a._v(" "),e("p",[a._v("通过 babylon 分析代码生成 ast 语法树，通过 babel-traverse 分析 ast 中的依赖关系，以及 babel-core 将 ast 解析\n成 es5 代码，可以拿到所有的依赖关系及模块代码。最后通过函数自执行的方式执行所有代码")])])}),[],!1,null,null,null);e.default=v.exports}}]);